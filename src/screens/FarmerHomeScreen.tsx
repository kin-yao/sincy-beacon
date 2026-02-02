import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionCard } from '../components/SectionCard';
import { colors } from '../theme/colors';

export function FarmerHomeScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Farmer Home</Text>
      <SectionCard title="Quick verify">
        <Text style={styles.bodyText}>Scan a product barcode to confirm authenticity within 10 seconds.</Text>
      </SectionCard>
      <SectionCard title="Seasonal tips">
        <Text style={styles.bodyText}>Get crop-specific guidance and market pricing updates.</Text>
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
