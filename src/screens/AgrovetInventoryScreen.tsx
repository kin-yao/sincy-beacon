import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { AppHeader } from '../components/AppHeader';
import { TopNavBar } from '../components/TopNavBar';
import { useAppTheme } from '../theme/theme';

export function AgrovetInventoryScreen() {
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
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <AppHeader title="Sincy Agrovet" subtitle="Green Farm Agrovet" onLogout={() => {}} />
      <TopNavBar tabs={tabs} />
      <View style={styles.content}>
        <View style={[styles.stockCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={styles.stockHeader}>
            <Text style={[styles.stockTitle, { color: colors.text }]}>NPK 23:23:0 Fertilizer</Text>
            <Ionicons name="checkmark-circle" size={18} color={colors.green} />
          </View>
          <Text style={[styles.stockMeta, { color: colors.grayMuted }]}>Batch: KEN-2024-521</Text>
          <Text style={[styles.stockMeta, { color: colors.grayMuted }]}>Stock: 120 units</Text>
          <Text style={[styles.stockMeta, { color: colors.grayMuted }]}>Expires: Dec 2025</Text>
        </View>
        <View
          style={[
            styles.stockCard,
            styles.lowStock,
            { backgroundColor: colors.card, borderColor: colors.border, borderLeftColor: colors.danger },
          ]}
        >
          <View style={styles.stockHeader}>
            <Text style={[styles.stockTitle, { color: colors.text }]}>Hybrid Maize Seeds</Text>
            <Ionicons name="alert-circle" size={18} color={colors.danger} />
          </View>
          <Text style={[styles.stockMeta, { color: colors.grayMuted }]}>Batch: HBR-103-2024</Text>
          <Text style={[styles.stockMeta, { color: colors.grayMuted }]}>Stock: 8 units</Text>
          <Text style={[styles.stockMeta, { color: colors.grayMuted }]}>Action: Reorder Soon</Text>
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
  stockCard: {
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    gap: 6,
  },
  lowStock: {
    borderLeftWidth: 4,
  },
  stockHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stockTitle: {
    fontSize: 13,
    fontWeight: '700',
  },
  stockMeta: {
    fontSize: 11,
  },
});
