import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppHeader } from '../components/AppHeader';
import { PrimaryButton } from '../components/PrimaryButton';
import { colors } from '../theme/colors';

export function FarmerPaymentsScreen() {
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
    <View style={styles.screen}>
      <AppHeader title="Sincy Farmer" subtitle="Jane Kipchoge" onLogout={() => {}} />
      <View style={styles.content}>
        <View style={styles.totalCard}>
          <Text style={styles.totalLabel}>Total Pending</Text>
          <Text style={styles.totalValue}>KES 4,200</Text>
        </View>
        <View style={styles.paymentCard}>
          <View style={styles.paymentHeader}>
            <View>
              <Text style={styles.paymentTitle}>Payment Reference</Text>
              <Text style={styles.paymentMeta}>TXN-2024-001 · Jan 20, 2024</Text>
            </View>
            <Text style={styles.paymentStatus}>Pending</Text>
          </View>
          <PrimaryButton label="Confirm M-Pesa Receipt" onPress={() => {}} />
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
  totalCard: {
    backgroundColor: colors.greenPale,
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#B9D6C1',
  },
  totalLabel: {
    fontSize: 12,
    color: colors.grayMuted,
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.green,
  },
  paymentCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.border,
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
    color: colors.grayDark,
  },
  paymentMeta: {
    fontSize: 11,
    color: colors.grayMuted,
  },
  paymentStatus: {
    fontSize: 11,
    color: colors.green,
    fontWeight: '600',
  },
});
