import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { AppHeader } from '../components/AppHeader';
import { PrimaryButton } from '../components/PrimaryButton';
import { TopNavBar } from '../components/TopNavBar';
import { useAppTheme } from '../theme/theme';
import { loadJson } from '../storage/localStorage';

type AgrovetProfile = {
  storeName: string;
  ownerName: string;
  license: string;
  location: string;
};

export function AgrovetSettingsScreen() {
  const { colors } = useAppTheme();

  const [profile, setProfile] = useState<AgrovetProfile>({
    storeName: 'Green Farm Agrovet',
    ownerName: 'Not set',
    license: 'Active',
    location: 'Nakuru Town',
  });

  useEffect(() => {
    loadJson<AgrovetProfile>('signup:agrovet', profile).then(setProfile).catch(() => {
      // ignore and keep defaults
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tabs = [
    { label: 'Dashboard', route: 'Dashboard', icon: (c: string) => <Ionicons name="home-outline" size={16} color={c} /> },
    { label: 'Verify', route: 'Scan', icon: (c: string) => <Ionicons name="camera-outline" size={16} color={c} /> },
    { label: 'Inventory', route: 'Inventory', icon: (c: string) => <MaterialCommunityIcons name="cube-outline" size={16} color={c} /> },
    { label: 'Farmers', route: 'Farmers', icon: (c: string) => <Ionicons name="people-outline" size={16} color={c} /> },
    { label: 'Reports', route: 'Reports', icon: (c: string) => <Ionicons name="analytics-outline" size={16} color={c} /> },
    { label: 'Settings', route: 'Settings', icon: (c: string) => <Ionicons name="settings-outline" size={16} color={c} /> },
  ];

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <AppHeader title="Sincy Agrovet" subtitle={profile.storeName || 'Agrovet'} onLogout={() => {}} />
      <TopNavBar tabs={tabs} />

      <View style={styles.content}>
        <View style={[styles.settingsCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>{profile.storeName || 'Not set'}</Text>
          <Text style={[styles.cardSubtitle, { color: colors.grayMuted }]}>
            Owner: {profile.ownerName || 'Not set'}
          </Text>

          <View style={[styles.row, { borderBottomColor: colors.border }]}>
            <Text style={[styles.label, { color: colors.grayMuted }]}>Location</Text>
            <Text style={[styles.value, { color: colors.text }]}>{profile.location || 'Not set'}</Text>
          </View>

          <View style={[styles.row, { borderBottomColor: colors.border }]}>
            <Text style={[styles.label, { color: colors.grayMuted }]}>License</Text>
            <Text style={[styles.value, { color: colors.text }]}>{profile.license || 'Not set'}</Text>
          </View>

          <View style={[styles.row, { borderBottomColor: colors.border }]}>
            <Text style={[styles.label, { color: colors.grayMuted }]}>Language</Text>
            <Text style={[styles.value, { color: colors.text }]}>English</Text>
          </View>

          <PrimaryButton label="Logout" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { padding: 16 },
  settingsCard: {
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    gap: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  cardSubtitle: {
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: 8,
  },
  label: {
    fontSize: 12,
  },
  value: {
    fontSize: 12,
    fontWeight: '600',
  },
});
