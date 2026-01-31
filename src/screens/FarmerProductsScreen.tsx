import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionCard } from '../components/SectionCard';
import { colors } from '../theme/colors';

export function FarmerProductsScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.title}>My Products</Text>
      <SectionCard title="Verified history">
        <Text style={styles.bodyText}>Track every authentic input you have verified.</Text>
      </SectionCard>
      <SectionCard title="Batch tracking">
        <Text style={styles.bodyText}>Review batch numbers and expiration dates for safety.</Text>
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
