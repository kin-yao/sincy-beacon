import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { AppHeader } from '../components/AppHeader';
import { PrimaryButton } from '../components/PrimaryButton';
import { TopNavBar } from '../components/TopNavBar';
import { useAppTheme } from '../theme/theme';

export function FarmerPaymentsScreen() {
  const { colors } = useAppTheme();

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
      <AppHeader title="Sincy Farmer" subtitle="Jane Kipchoge" onLogout={() => {}} />
      <TopNavBar tabs={tabs} />

      <View style={styles.content}>
        <View style={[styles.totalCard, { backgroundColor: colors.greenPale, borderColor: colors.green }]}>
          <Text style={[styles.totalLabel, { color: colors.grayMuted }]}>Total Pending</Text>
          <Text style={[styles.totalValue, { color: colors.green }]}>KES 4,200</Text>
        </View>

        <View style={[styles.paymentCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={styles.paymentHeader}>
            <View>
              <Text style={[styles.paymentTitle, { color: colors.text }]}>Payment Reference</Text>
              <Text style={[styles.paymentMeta, { color: colors.grayMuted }]}>TXN-2024-001 · Jan 20, 2024</Text>
            </View>
            <Text style={[styles.paymentStatus, { color: colors.green }]}>Pending</Text>
          </View>

          <PrimaryButton label="Confirm M-Pesa Receipt" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { padding: 16, gap: 12 },

  totalCard: {
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    gap: 4,
  },
  totalLabel: {
    fontSize: 12,
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '700',
  },

  paymentCard: {
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    gap: 12,
  },
  paymentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentTitle: {
    fontSize: 13,
    fontWeight: '700',
  },
  paymentMeta: {
    fontSize: 11,
  },
  paymentStatus: {
    fontSize: 11,
    fontWeight: '600',
  },
});
