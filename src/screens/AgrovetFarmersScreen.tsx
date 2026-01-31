import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionCard } from '../components/SectionCard';
import { colors } from '../theme/colors';

export function AgrovetFarmersScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Farmer Records</Text>
      <SectionCard title="Verified network">
        <Text style={styles.bodyText}>Review all farmers verified through your store.</Text>
      </SectionCard>
      <SectionCard title="SACCO link">
        <Text style={styles.bodyText}>Share farmer data with SACCOs for credit processing.</Text>
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
