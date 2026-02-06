import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { AppHeader } from '../components/AppHeader';
import { PrimaryButton } from '../components/PrimaryButton';
import { TopNavBar } from '../components/TopNavBar';
import { useAppTheme } from '../theme/theme';

export function FarmerProfileScreen() {
  const { colors } = useAppTheme();
  const tabs = [
    { label: 'Home', route: 'Home', icon: (color: string) => <Ionicons name="home-outline" size={16} color={color} /> },
    { label: 'Verify', route: 'Verify', icon: (color: string) => <Ionicons name="camera-outline" size={16} color={color} /> },
    { label: 'Products', route: 'Products', icon: (color: string) => <MaterialCommunityIcons name="cube-outline" size={16} color={color} /> },
    { label: 'Alerts', route: 'Alerts', icon: (color: string) => <Ionicons name="notifications-outline" size={16} color={color} /> },
    { label: 'Payments', route: 'Payments', icon: (color: string) => <Ionicons name="card-outline" size={16} color={color} /> },
    { label: 'Profile', route: 'Profile', icon: (color: string) => <Ionicons name="person-outline" size={16} color={color} /> },
  ];
  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <AppHeader title="Sincy Farmer" subtitle="Jane Kipchoge" onLogout={() => {}} />
      <TopNavBar tabs={tabs} />
      <View style={styles.content}>
        <View style={[styles.profileCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.profileTitle, { color: colors.text }]}>Sincy Farmer</Text>
          <Text style={[styles.profileSubtitle, { color: colors.grayMuted }]}>Kagema SACCO Member</Text>
          <View style={[styles.profileRow, { borderBottomColor: colors.border }]}>
            <Text style={[styles.profileLabel, { color: colors.grayMuted }]}>Location</Text>
            <Text style={[styles.profileValue, { color: colors.text }]}>Nakuru Town</Text>
          </View>
          <View style={[styles.profileRow, { borderBottomColor: colors.border }]}>
            <Text style={[styles.profileLabel, { color: colors.grayMuted }]}>National ID</Text>
            <Text style={[styles.profileValue, { color: colors.text }]}>12345678</Text>
          </View>
          <View style={[styles.profileRow, { borderBottomColor: colors.border }]}>
            <Text style={[styles.profileLabel, { color: colors.grayMuted }]}>Language</Text>
            <Text style={[styles.profileValue, { color: colors.text }]}>English</Text>
          </View>
          <PrimaryButton label="Logout" onPress={() => {}} variant="outline" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
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
