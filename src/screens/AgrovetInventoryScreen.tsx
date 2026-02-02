import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppHeader } from '../components/AppHeader';
import { colors } from '../theme/colors';

export function AgrovetInventoryScreen() {
  return (
    <View style={styles.screen}>
      <AppHeader title="Sincy Agrovet" subtitle="Green Farm Agrovet" onLogout={() => {}} />
      <View style={styles.content}>
        <View style={styles.stockCard}>
          <View style={styles.stockHeader}>
            <Text style={styles.stockTitle}>NPK 23:23:0 Fertilizer</Text>
            <Ionicons name="checkmark-circle" size={18} color={colors.green} />
          </View>
          <Text style={styles.stockMeta}>Batch: KEN-2024-521</Text>
          <Text style={styles.stockMeta}>Stock: 120 units</Text>
          <Text style={styles.stockMeta}>Expires: Dec 2025</Text>
        </View>
        <View style={[styles.stockCard, styles.lowStock]}> 
          <View style={styles.stockHeader}>
            <Text style={styles.stockTitle}>Hybrid Maize Seeds</Text>
            <Ionicons name="alert-circle" size={18} color={colors.danger} />
          </View>
          <Text style={styles.stockMeta}>Batch: HBR-103-2024</Text>
          <Text style={styles.stockMeta}>Stock: 8 units</Text>
          <Text style={styles.stockMeta}>Action: Reorder Soon</Text>
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
  stockCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 6,
  },
  lowStock: {
    borderLeftWidth: 4,
    borderLeftColor: colors.danger,
  },
  stockHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stockTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.grayDark,
  },
  stockMeta: {
    fontSize: 11,
    color: colors.grayMuted,
  },
});
