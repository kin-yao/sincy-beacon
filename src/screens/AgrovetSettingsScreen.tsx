import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppHeader } from '../components/AppHeader';
import { PrimaryButton } from '../components/PrimaryButton';
import { colors } from '../theme/colors';

export function AgrovetSettingsScreen() {
  return (
    <View style={styles.screen}>
      <AppHeader title="Sincy Agrovet" subtitle="Green Farm Agrovet" onLogout={() => {}} />
      <View style={styles.content}>
        <View style={styles.settingsCard}>
          <Text style={styles.cardTitle}>Green Farm Agrovet</Text>
          <Text style={styles.cardSubtitle}>Retail Agrovet</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Location</Text>
            <Text style={styles.value}>Nakuru Town</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>License</Text>
            <Text style={styles.value}>Active</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Language</Text>
            <Text style={styles.value}>English</Text>
          </View>
          <PrimaryButton label="Logout" onPress={() => {}} />
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
  },
  settingsCard: {
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.grayDark,
  },
  cardSubtitle: {
    fontSize: 12,
    color: colors.grayMuted,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingVertical: 8,
  },
  label: {
    fontSize: 12,
    color: colors.grayMuted,
  },
  value: {
    fontSize: 12,
    color: colors.grayDark,
    fontWeight: '600',
  },
});
