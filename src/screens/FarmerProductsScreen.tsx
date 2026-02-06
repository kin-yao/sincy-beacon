import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { AppHeader } from '../components/AppHeader';
import { TopNavBar } from '../components/TopNavBar';
import { useAppTheme } from '../theme/theme';

export function FarmerProductsScreen() {
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
        {/* Verified product */}
        <View
          style={[
            styles.productCard,
            { backgroundColor: colors.card, borderColor: colors.border, borderLeftColor: colors.green },
          ]}
        >
          <View style={styles.productHeader}>
            <Text style={[styles.productTitle, { color: colors.text }]}>NPK 23:23:0 Fertilizer</Text>
            <Ionicons name="checkmark-circle" size={18} color={colors.green} />
          </View>
          <Text style={[styles.productMeta, { color: colors.grayMuted }]}>Batch: KEN-2024-521</Text>
          <Text style={[styles.productMeta, { color: colors.grayMuted }]}>Retailer: Green Farm Agrovet</Text>
          <Text style={[styles.productMeta, { color: colors.grayMuted }]}>Expires: Dec 2025</Text>
        </View>

        {/* Alert product */}
        <View
          style={[
            styles.productCard,
            { backgroundColor: colors.card, borderColor: colors.border, borderLeftColor: colors.danger },
          ]}
        >
          <View style={styles.productHeader}>
            <Text style={[styles.productTitle, { color: colors.text }]}>Hybrid Maize Seeds</Text>
            <Ionicons name="alert-circle" size={18} color={colors.danger} />
          </View>
          <Text style={[styles.productMeta, { color: colors.grayMuted }]}>Status: Counterfeit Alert</Text>
          <Text style={[styles.productMeta, { color: colors.grayMuted }]}>Action: Report to SACCO</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { padding: 16, gap: 12 },

  productCard: {
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderLeftWidth: 4,
    gap: 6,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productTitle: {
    fontSize: 13,
    fontWeight: '700',
  },
  productMeta: {
    fontSize: 11,
  },
});
