import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionCard } from '../components/SectionCard';
import { colors } from '../theme/colors';

export function FarmerVerifyScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Verify Product</Text>
      <SectionCard title="Scanner ready">
        <Text style={styles.bodyText}>Use the camera to scan Code128, EAN-13, or QR codes.</Text>
      </SectionCard>
      <SectionCard title="Manual lookup">
        <Text style={styles.bodyText}>Search by product name or barcode when offline.</Text>
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
