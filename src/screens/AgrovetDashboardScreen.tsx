import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { AppHeader } from '../components/AppHeader';
import { TopNavBar } from '../components/TopNavBar';
import { useAppTheme } from '../theme/theme';

export function AgrovetDashboardScreen() {
  const { colors } = useAppTheme();

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
      <AppHeader title="Sincy Agrovet" subtitle="Green Farm Agrovet" onLogout={() => {}} />
      <TopNavBar tabs={tabs} />

      <View style={styles.content}>
        {/* Top Stats */}
        <View style={[styles.topStats, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={styles.topStat}>
            <Text style={[styles.topLabel, { color: colors.grayMuted }]}>Today's Sales</Text>
            <Text style={[styles.topValue, { color: colors.green }]}>15</Text>
          </View>
          <View style={styles.topStat}>
            <Text style={[styles.topLabel, { color: colors.grayMuted }]}>Verified</Text>
            <Text style={[styles.topValue, { color: colors.green }]}>12</Text>
          </View>
          <View style={styles.topStat}>
            <Text style={[styles.topLabel, { color: colors.grayMuted }]}>Farmers</Text>
            <Text style={[styles.topValue, { color: colors.green }]}>487</Text>
          </View>
        </View>

        {/* Cards */}
        <View style={styles.statRow}>
          <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <MaterialCommunityIcons name="chart-line" size={18} color={colors.green} />
            <Text style={[styles.cardValue, { color: colors.text }]}>KES 42.5k</Text>
            <Text style={[styles.cardLabel, { color: colors.grayMuted }]}>Revenue</Text>
          </View>

          <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <MaterialCommunityIcons name="cube-outline" size={18} color={colors.danger} />
            <Text style={[styles.cardValue, { color: colors.danger }]}>8</Text>
            <Text style={[styles.cardLabel, { color: colors.grayMuted }]}>Low Stock</Text>
          </View>
        </View>

        {/* Recent Activity */}
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Recent Verifications</Text>

        <View style={[styles.activityCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={[styles.activityIcon, { backgroundColor: colors.greenLight }]}>
            <Ionicons name="checkmark-circle" size={18} color={colors.green} />
          </View>

          <View style={styles.activityBody}>
            <Text style={[styles.activityTitle, { color: colors.text }]}>Jane Kipchoge</Text>
            <Text style={[styles.activitySubtitle, { color: colors.grayMuted }]}>Verified NPK 23:23:0</Text>
          </View>

          <Text style={[styles.activityTime, { color: colors.grayMuted }]}>15 min</Text>
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
    gap: 12,
  },
  topStats: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 12,
  },
  topStat: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  topLabel: {
    fontSize: 11,
  },
  topValue: {
    fontSize: 16,
    fontWeight: '700',
  },
  statRow: {
    flexDirection: 'row',
    gap: 12,
  },
  card: {
    flex: 1,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    gap: 6,
  },
  cardValue: {
    fontSize: 16,
    fontWeight: '700',
  },
  cardLabel: {
    fontSize: 11,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
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
