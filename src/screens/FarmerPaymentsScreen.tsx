import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionCard } from '../components/SectionCard';
import { colors } from '../theme/colors';

export function FarmerPaymentsScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Payments</Text>
      <SectionCard title="M-Pesa status">
        <Text style={styles.bodyText}>Pending payments are confirmed automatically once received.</Text>
      </SectionCard>
      <SectionCard title="SACCO credit">
        <Text style={styles.bodyText}>View your SACCO balance and repayment schedule.</Text>
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
