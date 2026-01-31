import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionCard } from '../components/SectionCard';
import { colors } from '../theme/colors';

export function FarmerAlertsScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Alerts</Text>
      <SectionCard title="Counterfeit warnings">
        <Text style={styles.bodyText}>Receive alerts when counterfeit batches are detected nearby.</Text>
      </SectionCard>
      <SectionCard title="Sync status">
        <Text style={styles.bodyText}>Offline cache is up to date. Last sync: 2 hours ago.</Text>
      </SectionCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.grayDark,
  },
  bodyText: {
    fontSize: 14,
    color: colors.grayDark,
  },
});
