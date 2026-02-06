import React, { useMemo, useState } from 'react';
import { FlatList, Pressable, RefreshControl, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TopNavBar } from '../components/TopNavBar';
import { TopAppBar } from '../components/common/TopAppBar';
import { SearchBar } from '../components/common/SearchBar';
import { EmptyState } from '../components/common/EmptyState';
import { ListItemCard } from '../components/common/ListItemCard';
import { PrimaryButton } from '../components/PrimaryButton';
import { useAppTheme } from '../theme/theme';
import { useOfflineRepo } from '../data/repository';
import { ScanHistory } from '../data/types';

type ViewMode = 'scan' | 'detail' | 'addProduct';

export function AgrovetScanScreen() {
  const { colors, toggleTheme } = useAppTheme();
  const { db, refresh, addScan, addProduct } = useOfflineRepo();
  const [mode, setMode] = useState<ViewMode>('scan');
  const [barcodeInput, setBarcodeInput] = useState('');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<ScanHistory | null>(null);

  const [newProductName, setNewProductName] = useState('');

  const tabs = [
    { label: 'Dashboard', route: 'Dashboard', icon: (c: string) => <Ionicons name="home-outline" size={16} color={c} /> },
    { label: 'Verify', route: 'Scan', icon: (c: string) => <Ionicons name="camera-outline" size={16} color={c} /> },
    { label: 'Inventory', route: 'Inventory', icon: (c: string) => <MaterialCommunityIcons name="cube-outline" size={16} color={c} /> },
    { label: 'Farmers', route: 'Farmers', icon: (c: string) => <Ionicons name="people-outline" size={16} color={c} /> },
    { label: 'Reports', route: 'Reports', icon: (c: string) => <Ionicons name="analytics-outline" size={16} color={c} /> },
    { label: 'Settings', route: 'Settings', icon: (c: string) => <Ionicons name="settings-outline" size={16} color={c} /> },
  ];

  const filteredScans = useMemo(
    () => db.scans.filter((item) => `${item.barcode} ${item.notes}`.toLowerCase().includes(search.toLowerCase())),
    [db.scans, search],
  );

  const runScan = () => {
    const barcode = barcodeInput.trim();
    if (!barcode) {
      return;
    }
    const found = db.products.find((p) => p.barcode === barcode);
    if (found) {
      addScan({ barcode, productId: found.id, result: 'matched', notes: `Matched ${found.name}` });
      setMode('scan');
      setBarcodeInput('');
      return;
    }
    addScan({ barcode, result: 'not_found', notes: 'Product not found in local DB' });
    setMode('addProduct');
  };

  const saveProductFromScan = () => {
    if (!barcodeInput.trim() || !newProductName.trim()) {
      return;
    }
    addProduct({
      name: newProductName,
      barcode: barcodeInput,
      category: 'Fertilizer',
      sacco: 'Tai SACCO',
      location: 'Nakuru',
      status: 'verified',
    });
    setNewProductName('');
    setBarcodeInput('');
    setMode('scan');
  };

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}> 
      <TopAppBar
        title={mode === 'scan' ? 'Scan Product' : mode === 'detail' ? 'Scan Details' : 'Add Product from Scan'}
        subtitle="Works offline with local records"
        showBack={mode !== 'scan'}
        onBackPress={() => setMode('scan')}
        actions={mode === 'scan' ? [
          { icon: 'sync-outline', onPress: refresh, accessibilityLabel: 'Refresh local scan history' },
          { icon: 'moon-outline', onPress: toggleTheme, accessibilityLabel: 'Toggle theme' },
        ] : []}
      />
      <TopNavBar tabs={tabs} />

      {mode === 'scan' ? (
        <View style={styles.content}>
          <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}> 
            <Text style={[styles.title, { color: colors.text }]}>Camera Scan (Placeholder)</Text>
            <Text style={[styles.text, { color: colors.grayMuted }]}>Camera dependency install is blocked in this environment. Use barcode input below for now.</Text>
            <TextInput value={barcodeInput} onChangeText={setBarcodeInput} placeholder="Enter or paste barcode" placeholderTextColor={colors.grayMedium} style={[styles.input, { borderColor: colors.border, color: colors.text }]} />
            <PrimaryButton label="Scan / Match Product" onPress={runScan} icon={<Ionicons name="scan-outline" size={18} color={colors.white} />} />
          </View>

          <SearchBar value={search} onChangeText={setSearch} placeholder="Filter scan history by barcode" />

          <FlatList
            data={filteredScans}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
            refreshControl={<RefreshControl refreshing={false} onRefresh={refresh} tintColor={colors.green} />}
            renderItem={({ item }) => (
              <ListItemCard
                title={`Barcode ${item.barcode}`}
                subtitle={item.notes}
                tag={new Date(item.scannedAt).toLocaleString()}
                status={item.result === 'matched' ? 'matched' : 'not found'}
                onPress={() => {
                  setSelected(item);
                  setMode('detail');
                }}
              />
            )}
            ListEmptyComponent={
              <EmptyState
                title="No scan history yet"
                message="Scan ya kwanza itatokea hapa. Jaribu barcode ya DAP Fertilizer 50kg demo data."
              />
            }
          />
        </View>
      ) : null}

      {mode === 'detail' && selected ? (
        <View style={styles.content}>
          <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}> 
            <Text style={[styles.title, { color: colors.text }]}>Scan Record</Text>
            <Text style={[styles.text, { color: colors.grayMuted }]}>Barcode: {selected.barcode}</Text>
            <Text style={[styles.text, { color: colors.grayMuted }]}>Result: {selected.result}</Text>
            <Text style={[styles.text, { color: colors.grayMuted }]}>Notes: {selected.notes}</Text>
            <Text style={[styles.text, { color: colors.grayMuted }]}>Time: {new Date(selected.scannedAt).toLocaleString()}</Text>
          </View>
          <PrimaryButton label="Back to Scan" onPress={() => setMode('scan')} />
        </View>
      ) : null}

      {mode === 'addProduct' ? (
        <View style={styles.content}>
          <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}> 
            <Text style={[styles.title, { color: colors.text }]}>Product not found</Text>
            <Text style={[styles.text, { color: colors.grayMuted }]}>No product for barcode {barcodeInput || '-'} in local DB. Add it now.</Text>
            <Text style={[styles.label, { color: colors.text }]}>Product Name</Text>
            <TextInput value={newProductName} onChangeText={setNewProductName} placeholder="e.g., Topdress Fertilizer" placeholderTextColor={colors.grayMedium} style={[styles.input, { borderColor: colors.border, color: colors.text }]} />
          </View>
          <PrimaryButton label="Save Product & Continue" onPress={saveProductFromScan} />
          <PrimaryButton label="Cancel" onPress={() => setMode('scan')} variant="outline" />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { flex: 1, paddingHorizontal: 12, paddingBottom: 12, gap: 10 },
  card: { borderWidth: 1, borderRadius: 12, padding: 12, gap: 8 },
  title: { fontSize: 18, fontWeight: '700' },
  text: { fontSize: 14 },
  label: { fontSize: 14, fontWeight: '600' },
  input: { borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10, fontSize: 14 },
  listContent: { gap: 8, paddingVertical: 8 },
});
