import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { AppHeader } from '../components/AppHeader';
import { colors } from '../theme/colors';

export function AgrovetDashboardScreen() {
  const { colors } = useAppTheme();
  const tabs = [
    { label: 'Dashboard', route: 'Dashboard', icon: (color: string) => <Ionicons name="home-outline" size={16} color={color} /> },
    { label: 'Verify', route: 'Scan', icon: (color: string) => <Ionicons name="camera-outline" size={16} color={color} /> },
    { label: 'Inventory', route: 'Inventory', icon: (color: string) => <MaterialCommunityIcons name="cube-outline" size={16} color={color} /> },
    { label: 'Farmers', route: 'Farmers', icon: (color: string) => <Ionicons name="people-outline" size={16} color={color} /> },
    { label: 'Reports', route: 'Reports', icon: (color: string) => <Ionicons name="analytics-outline" size={16} color={color} /> },
    { label: 'Settings', route: 'Settings', icon: (color: string) => <Ionicons name="settings-outline" size={16} color={color} /> },
  ];
  return (
    <View style={styles.screen}>
      <AppHeader title="Sincy Agrovet" subtitle="Green Farm Agrovet" onLogout={() => {}} />
      <View style={styles.content}>
        <View style={styles.topStats}>
          <View style={styles.topStat}>
            <Text style={styles.topLabel}>Today's Sales</Text>
            <Text style={styles.topValue}>15</Text>
          </View>
          <View style={styles.topStat}>
            <Text style={styles.topLabel}>Verified</Text>
            <Text style={styles.topValue}>12</Text>
          </View>
          <View style={styles.topStat}>
            <Text style={styles.topLabel}>Farmers</Text>
            <Text style={styles.topValue}>487</Text>
          </View>
        </View>
        <View style={styles.statRow}>
          <View style={styles.card}>
            <MaterialCommunityIcons name="chart-line" size={18} color={colors.green} />
            <Text style={styles.cardValue}>KES 42.5k</Text>
            <Text style={styles.cardLabel}>Revenue</Text>
          </View>
          <View style={styles.card}>
            <MaterialCommunityIcons name="cube-outline" size={18} color={colors.danger} />
            <Text style={[styles.cardValue, styles.cardDanger]}>8</Text>
            <Text style={styles.cardLabel}>Low Stock</Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Recent Verifications</Text>
        <View style={styles.activityCard}>
          <View style={styles.activityIcon}>
            <Ionicons name="checkmark-circle" size={18} color={colors.green} />
          </View>
          <View style={styles.activityBody}>
            <Text style={styles.activityTitle}>Jane Kipchoge</Text>
            <Text style={styles.activitySubtitle}>Verified NPK 23:23:0</Text>
          </View>
          <Text style={styles.activityTime}>15 min</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.grayLight,
  },
  content: {
    padding: 16,
    gap: 12,
  },
  topStats: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 12,
  },
  topStat: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  topLabel: {
    fontSize: 11,
    color: colors.grayMuted,
  },
  topValue: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.green,
  },
  statRow: {
    flexDirection: 'row',
    gap: 12,
  },
  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 6,
  },
  cardValue: {
    fontSize: 16,
    fontWeight: '700',
  },
  cardDanger: {
    color: colors.danger,
  },
  cardLabel: {
    fontSize: 11,
    color: colors.grayMuted,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.grayDark,
  },
  activityCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  activityIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.greenLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityBody: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.grayDark,
  },
  activitySubtitle: {
    fontSize: 11,
    color: colors.grayMuted,
  },
  activityTime: {
    fontSize: 10,
    color: colors.grayMuted,
  },
});
