import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppHeader } from '../components/AppHeader';
import { PrimaryButton } from '../components/PrimaryButton';
import { colors } from '../theme/colors';

export function FarmerHomeScreen() {
  return (
    <View style={styles.screen}>
      <AppHeader title="Sincy Farmer" subtitle="Jane Kipchoge" onLogout={() => {}} />
      <View style={styles.content}>
        <View style={styles.statusCard}>
          <View style={styles.statusText}>
            <Text style={styles.statusLabel}>ACCOUNT STATUS</Text>
            <Text style={styles.statusValue}>Active</Text>
            <Text style={styles.statusMeta}>Linked to Kagema SACCO</Text>
          </View>
          <View style={styles.statusIcon}>
            <Ionicons name="checkmark-circle-outline" size={28} color={colors.green} />
          </View>
        </View>
        <View style={styles.statRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Verified Products</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={[styles.statValue, styles.statDanger]}>KES 4,200</Text>
            <Text style={styles.statLabel}>Pending Payment</Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityCard}>
          <View style={styles.activityIcon}>
            <Ionicons name="checkmark-circle" size={18} color={colors.green} />
          </View>
          <View style={styles.activityBody}>
            <Text style={styles.activityTitle}>Fertilizer Verified</Text>
            <Text style={styles.activitySubtitle}>Batch #KEN-2024-521</Text>
          </View>
          <Text style={styles.activityTime}>2h ago</Text>
        </View>
        <View style={styles.activityCard}>
          <View style={[styles.activityIcon, styles.activityWarn]}>
            <Ionicons name="alert-circle" size={18} color={colors.danger} />
          </View>
          <View style={styles.activityBody}>
            <Text style={styles.activityTitle}>Payment Pending</Text>
            <Text style={styles.activitySubtitle}>Confirm M-Pesa receipt</Text>
          </View>
          <Text style={styles.activityTime}>4h ago</Text>
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
    backgroundColor: colors.grayLight,
  },
  content: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  statusCard: {
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusText: {
    gap: 4,
  },
  statusLabel: {
    fontSize: 10,
    letterSpacing: 0.4,
    color: colors.grayMuted,
  },
  statusValue: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.green,
  },
  statusMeta: {
    fontSize: 12,
    color: colors.grayMuted,
  },
  statusIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statRow: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    gap: 4,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.green,
  },
  statDanger: {
    color: colors.danger,
  },
  statLabel: {
    fontSize: 11,
    color: colors.grayMuted,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.grayDark,
    marginTop: 4,
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
  activityWarn: {
    backgroundColor: colors.redLight,
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
