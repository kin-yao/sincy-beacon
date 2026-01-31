import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionCard } from '../components/SectionCard';
import { colors } from '../theme/colors';

export function AgrovetDashboardScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Agrovet Dashboard</Text>
      <SectionCard title="Today's verifications">
        <Text style={styles.bodyText}>Track verified products and customer registrations.</Text>
      </SectionCard>
      <SectionCard title="Sales summary">
        <Text style={styles.bodyText}>View daily revenue and payment confirmations.</Text>
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
