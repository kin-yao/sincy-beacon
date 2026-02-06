import React, { useMemo, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
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

export function AgrovetReportsScreen() {
  const { colors, toggleTheme } = useAppTheme();
  const { db, refresh } = useOfflineRepo();
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<ScanHistory | null>(null);

  const tabs = [
    { label: 'Dashboard', route: 'Dashboard', icon: (c: string) => <Ionicons name="home-outline" size={16} color={c} /> },
    { label: 'Verify', route: 'Scan', icon: (c: string) => <Ionicons name="camera-outline" size={16} color={c} /> },
    { label: 'Inventory', route: 'Inventory', icon: (c: string) => <MaterialCommunityIcons name="cube-outline" size={16} color={c} /> },
    { label: 'Farmers', route: 'Farmers', icon: (c: string) => <Ionicons name="people-outline" size={16} color={c} /> },
    { label: 'Reports', route: 'Reports', icon: (c: string) => <Ionicons name="analytics-outline" size={16} color={c} /> },
    { label: 'Settings', route: 'Settings', icon: (c: string) => <Ionicons name="settings-outline" size={16} color={c} /> },
  ];

  const filtered = useMemo(
    () => db.scans.filter((item) => `${item.barcode} ${item.notes}`.toLowerCase().includes(search.toLowerCase())),
    [db.scans, search],
  );

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <TopAppBar
        title={selected ? 'Scan Details' : 'Scan History List'}
        subtitle="Offline reports"
        showBack={!!selected}
        onBackPress={() => setSelected(null)}
        actions={!selected ? [
          { icon: 'sync-outline', onPress: refresh, accessibilityLabel: 'Refresh history' },
          { icon: 'moon-outline', onPress: toggleTheme, accessibilityLabel: 'Toggle theme' },
        ] : []}
      />
      <TopNavBar tabs={tabs} />

      {!selected ? (
        <View style={styles.content}>
          <SearchBar value={search} onChangeText={setSearch} placeholder="Search by barcode" />
          <FlatList
            data={filtered}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
            refreshControl={<RefreshControl refreshing={false} onRefresh={refresh} tintColor={colors.green} />}
            renderItem={({ item }) => (
              <ListItemCard
                title={`Barcode ${item.barcode}`}
                subtitle={item.notes}
                tag={new Date(item.scannedAt).toLocaleString()}
                status={item.result === 'matched' ? 'matched' : 'not found'}
                onPress={() => setSelected(item)}
              />
            )}
            ListEmptyComponent={<EmptyState title="No scan reports" message="Hakuna report bado. Fanya verification kwanza ili historia ionekane hapa." />}
          />
        </View>
      ) : (
        <View style={styles.content}>
          <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}> 
            <Text style={[styles.title, { color: colors.text }]}>Barcode {selected.barcode}</Text>
            <Text style={[styles.text, { color: colors.grayMuted }]}>Result: {selected.result}</Text>
            <Text style={[styles.text, { color: colors.grayMuted }]}>Notes: {selected.notes}</Text>
            <Text style={[styles.text, { color: colors.grayMuted }]}>Scanned: {new Date(selected.scannedAt).toLocaleString()}</Text>
          </View>
          <PrimaryButton label="Back to History" onPress={() => setSelected(null)} />
        </View>
      )}
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
});
