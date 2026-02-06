import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { AppHeader } from '../components/AppHeader';
import { PrimaryButton } from '../components/PrimaryButton';
import { TopNavBar } from '../components/TopNavBar';
import { useAppTheme } from '../theme/theme';
import { loadJson } from '../storage/localStorage';

type FarmerProfile = {
  name: string;
  nid: string;
  phone: string;
  sacco: string;
  location?: string;
  language?: string;
};

export function FarmerProfileScreen() {
  const { colors } = useAppTheme();

  const [profile, setProfile] = useState<FarmerProfile>({
    name: 'Jane Kipchoge',
    nid: '12345678',
    phone: '+254700000000',
    sacco: 'Kagema SACCO',
    location: 'Nakuru Town',
    language: 'English',
  });

  useEffect(() => {
    loadJson<FarmerProfile>('signup:farmer', profile).then(setProfile).catch(() => {
      // keep defaults if storage missing
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tabs = [
    { label: 'Home', route: 'Home', icon: (c: string) => <Ionicons name="home-outline" size={16} color={c} /> },
    { label: 'Verify', route: 'Verify', icon: (c: string) => <Ionicons name="camera-outline" size={16} color={c} /> },
    { label: 'Products', route: 'Products', icon: (c: string) => <MaterialCommunityIcons name="cube-outline" size={16} color={c} /> },
    { label: 'Alerts', route: 'Alerts', icon: (c: string) => <Ionicons name="notifications-outline" size={16} color={c} /> },
    { label: 'Payments', route: 'Payments', icon: (c: string) => <Ionicons name="card-outline" size={16} color={c} /> },
    { label: 'Profile', route: 'Profile', icon: (c: string) => <Ionicons name="person-outline" size={16} color={c} /> },
  ];

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <AppHeader title="Sincy Farmer" subtitle={profile.name || 'Farmer'} onLogout={() => {}} />
      <TopNavBar tabs={tabs} />

      <View style={styles.content}>
        <View style={[styles.profileCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.profileTitle, { color: colors.text }]}>{profile.name || 'Not set'}</Text>
          <Text style={[styles.profileSubtitle, { color: colors.grayMuted }]}>
            {profile.sacco ? `${profile.sacco} Member` : 'SACCO not set'}
          </Text>

          <View style={[styles.profileRow, { borderBottomColor: colors.border }]}>
            <Text style={[styles.profileLabel, { color: colors.grayMuted }]}>Location</Text>
            <Text style={[styles.profileValue, { color: colors.text }]}>{profile.location || 'Not set'}</Text>
          </View>

          <View style={[styles.profileRow, { borderBottomColor: colors.border }]}>
            <Text style={[styles.profileLabel, { color: colors.grayMuted }]}>National ID</Text>
            <Text style={[styles.profileValue, { color: colors.text }]}>{profile.nid || 'Not set'}</Text>
          </View>

          <View style={[styles.profileRow, { borderBottomColor: colors.border }]}>
            <Text style={[styles.profileLabel, { color: colors.grayMuted }]}>Phone</Text>
            <Text style={[styles.profileValue, { color: colors.text }]}>{profile.phone || 'Not set'}</Text>
          </View>

          <View style={[styles.profileRow, { borderBottomColor: colors.border }]}>
            <Text style={[styles.profileLabel, { color: colors.grayMuted }]}>Language</Text>
            <Text style={[styles.profileValue, { color: colors.text }]}>{profile.language || 'English'}</Text>
          </View>

          <PrimaryButton label="Logout" onPress={() => {}} variant="outline" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { padding: 16 },

  profileCard: {
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    gap: 12,
  },
  profileTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  profileSubtitle: {
    fontSize: 12,
  },
  profileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: 8,
  },
  profileLabel: {
    fontSize: 12,
  },
  profileValue: {
    fontSize: 12,
    fontWeight: '600',
  },
});
