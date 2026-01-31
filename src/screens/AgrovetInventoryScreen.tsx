import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionCard } from '../components/SectionCard';
import { colors } from '../theme/colors';

export function AgrovetInventoryScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Inventory</Text>
      <SectionCard title="Batch tracking">
        <Text style={styles.bodyText}>Monitor stock levels and batch expiration dates.</Text>
      </SectionCard>
      <SectionCard title="Offline cache">
        <Text style={styles.bodyText}>Ensure the barcode database is synced for offline use.</Text>
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
