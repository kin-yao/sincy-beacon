import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionCard } from '../components/SectionCard';
import { colors } from '../theme/colors';

export function AgrovetReportsScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Reports</Text>
      <SectionCard title="Verification analytics">
        <Text style={styles.bodyText}>Track genuine vs counterfeit attempts over time.</Text>
      </SectionCard>
      <SectionCard title="Sales reports">
        <Text style={styles.bodyText}>Export daily and monthly sales summaries.</Text>
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
