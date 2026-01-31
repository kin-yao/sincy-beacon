import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionCard } from '../components/SectionCard';
import { colors } from '../theme/colors';

export function AgrovetSettingsScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Settings</Text>
      <SectionCard title="Store profile">
        <Text style={styles.bodyText}>Update business license, store details, and location.</Text>
      </SectionCard>
      <SectionCard title="Security">
        <Text style={styles.bodyText}>Manage PIN access and device permissions.</Text>
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
