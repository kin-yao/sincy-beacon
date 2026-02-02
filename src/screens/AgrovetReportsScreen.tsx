import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppHeader } from '../components/AppHeader';
import { colors } from '../theme/colors';

export function AgrovetReportsScreen() {
  return (
    <View style={styles.screen}>
      <AppHeader title="Sincy Agrovet" subtitle="Green Farm Agrovet" onLogout={() => {}} />
      <View style={styles.content}>
        <View style={styles.reportCard}>
          <View style={styles.reportIcon}>
            <Ionicons name="bar-chart-outline" size={18} color={colors.green} />
          </View>
          <View>
            <Text style={styles.reportTitle}>Verification Analytics</Text>
            <Text style={styles.reportMeta}>Track genuine vs counterfeit attempts.</Text>
          </View>
        </View>
        <View style={styles.reportCard}>
          <View style={styles.reportIcon}>
            <Ionicons name="document-text-outline" size={18} color={colors.green} />
          </View>
          <View>
            <Text style={styles.reportTitle}>Sales Reports</Text>
            <Text style={styles.reportMeta}>Export daily and monthly summaries.</Text>
          </View>
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
  reportCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  reportIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.greenLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reportTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.grayDark,
  },
  reportMeta: {
    fontSize: 11,
    color: colors.grayMuted,
  },
});
