import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { AppHeader } from '../components/AppHeader';
import { PrimaryButton } from '../components/PrimaryButton';
import { TopNavBar } from '../components/TopNavBar';
import { useAppTheme } from '../theme/theme';

export function FarmerHomeScreen() {
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
        <View style={[styles.statusCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={styles.statusText}>
            <Text style={[styles.statusLabel, { color: colors.grayMuted }]}>ACCOUNT STATUS</Text>
            <Text style={[styles.statusValue, { color: colors.green }]}>Active</Text>
            <Text style={[styles.statusMeta, { color: colors.grayMuted }]}>Linked to Kagema SACCO</Text>
          </View>
          <View style={[styles.statusIcon, { borderColor: colors.green }]}>
            <Ionicons name="checkmark-circle-outline" size={28} color={colors.green} />
          </View>
        </View>
        <View style={styles.statRow}>
          <View style={[styles.statCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Text style={[styles.statValue, { color: colors.green }]}>12</Text>
            <Text style={[styles.statLabel, { color: colors.grayMuted }]}>Verified Products</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Text style={[styles.statValue, { color: colors.danger }]}>KES 4,200</Text>
            <Text style={[styles.statLabel, { color: colors.grayMuted }]}>Pending Payment</Text>
          </View>
        </View>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Recent Activity</Text>
        <View style={[styles.activityCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={[styles.activityIcon, { backgroundColor: colors.greenLight }]}>
            <Ionicons name="checkmark-circle" size={18} color={colors.green} />
          </View>
          <View style={styles.activityBody}>
            <Text style={[styles.activityTitle, { color: colors.text }]}>Fertilizer Verified</Text>
            <Text style={[styles.activitySubtitle, { color: colors.grayMuted }]}>Batch #KEN-2024-521</Text>
          </View>
          <Text style={[styles.activityTime, { color: colors.grayMuted }]}>2h ago</Text>
        </View>
        <View style={[styles.activityCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={[styles.activityIcon, { backgroundColor: colors.redLight }]}>
            <Ionicons name="alert-circle" size={18} color={colors.danger} />
          </View>
          <View style={styles.activityBody}>
            <Text style={[styles.activityTitle, { color: colors.text }]}>Payment Pending</Text>
            <Text style={[styles.activitySubtitle, { color: colors.grayMuted }]}>Confirm M-Pesa receipt</Text>
          </View>
          <Text style={[styles.activityTime, { color: colors.grayMuted }]}>4h ago</Text>
        </View>
        <PrimaryButton
          label="Verify New Input"
          onPress={() => {}}
          icon={<Ionicons name="camera-outline" size={18} color={colors.white} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  statusCard: {
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusText: {
    gap: 4,
  },
  statusLabel: {
    fontSize: 10,
    letterSpacing: 0.4,
  },
  statusValue: {
    fontSize: 18,
    fontWeight: '700',
  },
  statusMeta: {
    fontSize: 12,
  },
  statusIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statRow: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    alignItems: 'center',
    gap: 4,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '700',
  },
  statLabel: {
    fontSize: 11,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginTop: 4,
  },
  activityCard: {
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  activityIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityBody: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 13,
    fontWeight: '600',
  },
  activitySubtitle: {
    fontSize: 11,
  },
  activityTime: {
    fontSize: 10,
  },
});
