import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionCard } from '../components/SectionCard';
import { colors } from '../theme/colors';

export function AgrovetScanScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Scan & Verify</Text>
      <SectionCard title="Farmer registration">
        <Text style={styles.bodyText}>Scan National ID to register farmer to your network.</Text>
      </SectionCard>
      <SectionCard title="Product verification">
        <Text style={styles.bodyText}>Authenticate barcodes and record transactions instantly.</Text>
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
