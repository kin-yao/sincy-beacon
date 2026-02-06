import React, { useMemo, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TopNavBar } from '../components/TopNavBar';
import { TopAppBar } from '../components/common/TopAppBar';
import { SearchBar } from '../components/common/SearchBar';
import { EmptyState } from '../components/common/EmptyState';
import { ListItemCard } from '../components/common/ListItemCard';
import { PrimaryButton } from '../components/PrimaryButton';
import { useAppTheme } from '../theme/theme';
import { useOfflineRepo } from '../data/repository';
import { Product } from '../data/types';

type ViewMode = 'list' | 'detail' | 'add';

export function AgrovetInventoryScreen() {
  const { colors, toggleTheme } = useAppTheme();
  const { db, refresh, addProduct } = useOfflineRepo();

  const [search, setSearch] = useState('');
  const [mode, setMode] = useState<ViewMode>('list');
  const [selected, setSelected] = useState<Product | null>(null);
  const [form, setForm] = useState({
    name: '',
    barcode: '',
    category: 'Fertilizer',
    sacco: 'Tai SACCO',
    location: 'Nakuru',
    status: 'verified' as Product['status'],
  });

  const tabs = [
    { label: 'Dashboard', route: 'Dashboard', icon: (c: string) => <Ionicons name="home-outline" size={16} color={c} /> },
    { label: 'Verify', route: 'Scan', icon: (c: string) => <Ionicons name="camera-outline" size={16} color={c} /> },
    { label: 'Inventory', route: 'Inventory', icon: (c: string) => <MaterialCommunityIcons name="cube-outline" size={16} color={c} /> },
    { label: 'Farmers', route: 'Farmers', icon: (c: string) => <Ionicons name="people-outline" size={16} color={c} /> },
    { label: 'Reports', route: 'Reports', icon: (c: string) => <Ionicons name="analytics-outline" size={16} color={c} /> },
    { label: 'Settings', route: 'Settings', icon: (c: string) => <Ionicons name="settings-outline" size={16} color={c} /> },
  ];

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return db.products;

    return db.products.filter((item) =>
      `${item.name} ${item.barcode}`.toLowerCase().includes(q),
    );
  }, [db.products, search]);

  const resetForm = () => {
    setForm({
      name: '',
      barcode: '',
      category: 'Fertilizer',
      sacco: 'Tai SACCO',
      location: 'Nakuru',
      status: 'verified',
    });
  };

  const goToDetail = (item: Product) => {
    setSelected(item);
    setMode('detail');
  };

  const saveProduct = () => {
    if (!form.name.trim() || !form.barcode.trim()) return;

    addProduct(form);
    resetForm();
    setMode('list');
  };

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <TopAppBar
        title={
          mode === 'list'
            ? 'Products'
            : mode === 'detail'
              ? 'Product Details'
              : 'Add Product'
        }
        subtitle="Offline-first inventory"
        showBack={mode !== 'list'}
        onBackPress={() => {
          setMode('list');
          setSelected(null);
        }}
        actions={
          mode === 'list'
            ? [
                { icon: 'add-outline', onPress: () => { resetForm(); setMode('add'); }, accessibilityLabel: 'Add Product' },
                { icon: 'sync-outline', onPress: refresh, accessibilityLabel: 'Refresh Data' },
                { icon: 'moon-outline', onPress: toggleTheme, accessibilityLabel: 'Toggle Theme' },
              ]
            : []
        }
      />

      <TopNavBar tabs={tabs} />

      {mode === 'list' ? (
        <View style={styles.content}>
          <SearchBar value={search} onChangeText={setSearch} placeholder="Search product name or barcode" />

          <FlatList
            data={filtered}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
            refreshControl={<RefreshControl refreshing={false} onRefresh={refresh} tintColor={colors.green} />}
            renderItem={({ item }) => (
              <ListItemCard
                title={item.name}
                subtitle={`${item.barcode} • ${item.location}`}
                tag={`${item.sacco} • ${new Date(item.updatedAt).toLocaleDateString()}`}
                status={item.status}
                onPress={() => goToDetail(item)}
              />
            )}
            ListEmptyComponent={
              <EmptyState
                title="No products yet"
                message="Bado hakuna bidhaa hapa. Tap + kuongeza bidhaa kama DAP Fertilizer 50kg."
              />
            }
          />
        </View>
      ) : null}

      {mode === 'detail' && selected ? (
        <View style={styles.content}>
          <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Text style={[styles.title, { color: colors.text }]}>{selected.name}</Text>
            <Text style={[styles.text, { color: colors.grayMuted }]}>Barcode: {selected.barcode}</Text>
            <Text style={[styles.text, { color: colors.grayMuted }]}>Category: {selected.category}</Text>
            <Text style={[styles.text, { color: colors.grayMuted }]}>SACCO: {selected.sacco}</Text>
            <Text style={[styles.text, { color: colors.grayMuted }]}>Location: {selected.location}</Text>
            <Text style={[styles.text, { color: colors.grayMuted }]}>
              Updated: {new Date(selected.updatedAt).toLocaleString()}
            </Text>
          </View>

          <PrimaryButton label="Back to Products" onPress={() => { setSelected(null); setMode('list'); }} />
        </View>
      ) : null}

      {mode === 'add' ? (
        <View style={styles.content}>
          <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Text style={[styles.label, { color: colors.text }]}>Product Name</Text>
            <TextInput
              value={form.name}
              onChangeText={(v) => setForm((p) => ({ ...p, name: v }))}
              placeholder="e.g., DAP Fertilizer 50kg"
              placeholderTextColor={colors.grayMedium}
              style={[styles.input, { borderColor: colors.border, color: colors.text }]}
            />

            <Text style={[styles.label, { color: colors.text }]}>Barcode</Text>
            <TextInput
              value={form.barcode}
              onChangeText={(v) => setForm((p) => ({ ...p, barcode: v }))}
              placeholder="e.g., 616100100010"
              placeholderTextColor={colors.grayMedium}
              style={[styles.input, { borderColor: colors.border, color: colors.text }]}
            />

            <Text style={[styles.label, { color: colors.text }]}>Location</Text>
            <TextInput
              value={form.location}
              onChangeText={(v) => setForm((p) => ({ ...p, location: v }))}
              placeholder="Nakuru"
              placeholderTextColor={colors.grayMedium}
              style={[styles.input, { borderColor: colors.border, color: colors.text }]}
            />
          </View>

          <PrimaryButton label="Save Product Offline" onPress={saveProduct} />
          <PrimaryButton label="Cancel" onPress={() => setMode('list')} variant="outline" />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { flex: 1, paddingHorizontal: 12, paddingBottom: 12, gap: 10 },
  listContent: { gap: 8, paddingVertical: 8 },

  card: { borderWidth: 1, borderRadius: 12, padding: 12, gap: 8 },
  title: { fontSize: 18, fontWeight: '700' },
  text: { fontSize: 14 },
  label: { fontSize: 14, fontWeight: '600' },
  input: { borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10, fontSize: 14 },
});
