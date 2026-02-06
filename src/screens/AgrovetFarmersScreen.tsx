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
import { Farmer } from '../data/types';

type ViewMode = 'list' | 'detail' | 'add';

export function AgrovetFarmersScreen() {
  const { colors, toggleTheme } = useAppTheme();
  const { db, refresh, addFarmer, updateFarmer, deleteFarmer } = useOfflineRepo();

  const [search, setSearch] = useState('');
  const [mode, setMode] = useState<ViewMode>('list');
  const [selected, setSelected] = useState<Farmer | null>(null);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    nationalId: '',
    location: 'Nakuru',
    sacco: 'Tai SACCO',
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
    if (!q) return db.farmers;

    return db.farmers.filter((item) =>
      `${item.name} ${item.nationalId} ${item.phone}`.toLowerCase().includes(q),
    );
  }, [db.farmers, search]);

  const resetForm = () => {
    setSelected(null);
    setForm({ name: '', phone: '', nationalId: '', location: 'Nakuru', sacco: 'Tai SACCO' });
  };

  const saveFarmer = () => {
    // very light validation
    if (!form.name.trim() || !form.phone.trim() || !form.nationalId.trim()) {
      // keep simple: you can replace with a toast/snackbar later
      return;
    }

    if (selected) {
      updateFarmer(selected.id, form);
    } else {
      addFarmer(form);
    }

    resetForm();
    setMode('list');
  };

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <TopAppBar
        title={
          mode === 'list'
            ? 'Farmers'
            : mode === 'detail'
              ? 'Farmer Details'
              : selected
                ? 'Edit Farmer'
                : 'Add Farmer'
        }
        subtitle="Stored locally for offline use"
        showBack={mode !== 'list'}
        onBackPress={() => {
          setMode('list');
          resetForm();
        }}
        actions={
          mode === 'list'
            ? [
                { icon: 'add-outline', onPress: () => { resetForm(); setMode('add'); }, accessibilityLabel: 'Add Farmer' },
                { icon: 'sync-outline', onPress: refresh, accessibilityLabel: 'Reload local data' },
                { icon: 'moon-outline', onPress: toggleTheme, accessibilityLabel: 'Toggle theme' },
              ]
            : []
        }
      />

      <TopNavBar tabs={tabs} />

      {mode === 'list' ? (
        <View style={styles.content}>
          <SearchBar value={search} onChangeText={setSearch} placeholder="Search by name, phone, or national ID" />

          <FlatList
            data={filtered}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
            refreshControl={<RefreshControl refreshing={false} onRefresh={refresh} tintColor={colors.green} />}
            renderItem={({ item }) => (
              <ListItemCard
                title={item.name}
                subtitle={`${item.location} • ${item.phone}`}
                tag={`${item.sacco} • ID ${item.nationalId}`}
                status="active"
                onPress={() => {
                  setSelected(item);
                  setMode('detail');
                }}
              />
            )}
            ListEmptyComponent={
              <EmptyState
                title="Hakuna farmer records"
                message="Ongeza mkulima mpya kama Wanjiku au Kiptoo ili uanze tracking offline."
              />
            }
          />
        </View>
      ) : null}

      {mode === 'detail' && selected ? (
        <View style={styles.content}>
          <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Text style={[styles.title, { color: colors.text }]}>{selected.name}</Text>
            <Text style={[styles.text, { color: colors.grayMuted }]}>Phone: {selected.phone}</Text>
            <Text style={[styles.text, { color: colors.grayMuted }]}>National ID: {selected.nationalId}</Text>
            <Text style={[styles.text, { color: colors.grayMuted }]}>Location: {selected.location}</Text>
            <Text style={[styles.text, { color: colors.grayMuted }]}>SACCO: {selected.sacco}</Text>
            <Text style={[styles.text, { color: colors.grayMuted }]}>
              Updated: {new Date(selected.updatedAt).toLocaleString()}
            </Text>
          </View>

          <PrimaryButton
            label="Edit Farmer"
            onPress={() => {
              setForm({
                name: selected.name,
                phone: selected.phone,
                nationalId: selected.nationalId,
                location: selected.location,
                sacco: selected.sacco,
              });
              setMode('add');
            }}
          />

          <PrimaryButton
            label="Delete Farmer"
            onPress={() => {
              deleteFarmer(selected.id);
              setSelected(null);
              setMode('list');
            }}
            variant="outline"
          />
        </View>
      ) : null}

      {mode === 'add' ? (
        <View style={styles.content}>
          <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Text style={[styles.label, { color: colors.text }]}>Farmer Name</Text>
            <TextInput
              value={form.name}
              onChangeText={(v) => setForm((p) => ({ ...p, name: v }))}
              placeholder="e.g., Wanjiku"
              placeholderTextColor={colors.grayMedium}
              style={[styles.input, { borderColor: colors.border, color: colors.text }]}
            />

            <Text style={[styles.label, { color: colors.text }]}>Phone</Text>
            <TextInput
              value={form.phone}
              onChangeText={(v) => setForm((p) => ({ ...p, phone: v }))}
              placeholder="e.g., +254712000111"
              placeholderTextColor={colors.grayMedium}
              keyboardType="phone-pad"
              style={[styles.input, { borderColor: colors.border, color: colors.text }]}
            />

            <Text style={[styles.label, { color: colors.text }]}>National ID</Text>
            <TextInput
              value={form.nationalId}
              onChangeText={(v) => setForm((p) => ({ ...p, nationalId: v }))}
              placeholder="e.g., 31245678"
              placeholderTextColor={colors.grayMedium}
              keyboardType="number-pad"
              style={[styles.input, { borderColor: colors.border, color: colors.text }]}
            />
          </View>

          <PrimaryButton label="Save Farmer Offline" onPress={saveFarmer} />
          <PrimaryButton
            label="Cancel"
            onPress={() => {
              resetForm();
              setMode('list');
            }}
            variant="outline"
          />
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
