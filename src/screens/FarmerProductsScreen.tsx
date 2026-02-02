import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppHeader } from '../components/AppHeader';
import { colors } from '../theme/colors';

export function FarmerProductsScreen() {
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
        <View style={[styles.productCard, styles.verifiedBorder]}>
          <View style={styles.productHeader}>
            <Text style={styles.productTitle}>NPK 23:23:0 Fertilizer</Text>
            <Ionicons name="checkmark-circle" size={18} color={colors.green} />
          </View>
          <Text style={styles.productMeta}>Batch: KEN-2024-521</Text>
          <Text style={styles.productMeta}>Retailer: Green Farm Agrovet</Text>
          <Text style={styles.productMeta}>Expires: Dec 2025</Text>
        </View>
        <View style={[styles.productCard, styles.alertBorder]}>
          <View style={styles.productHeader}>
            <Text style={styles.productTitle}>Hybrid Maize Seeds</Text>
            <Ionicons name="alert-circle" size={18} color={colors.danger} />
          </View>
          <Text style={styles.productMeta}>Status: Counterfeit Alert</Text>
          <Text style={styles.productMeta}>Action: Report to SACCO</Text>
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
  productCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 6,
  },
  verifiedBorder: {
    borderLeftWidth: 4,
    borderLeftColor: colors.green,
  },
  alertBorder: {
    borderLeftWidth: 4,
    borderLeftColor: '#F26B6B',
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
    color: colors.grayMuted,
  },
});
