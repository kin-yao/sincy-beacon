import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionCard } from '../components/SectionCard';
import { colors } from '../theme/colors';

type LoginScreenProps = {
  role: 'farmer' | 'agrovet';
  onContinue: () => void;
};

export function LoginScreen({ role, onContinue }: LoginScreenProps) {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Login</Text>
      <SectionCard title="Phone & PIN">
        <Text style={styles.bodyText}>Enter your phone number and 4-digit PIN to access the {role} dashboard.</Text>
      </SectionCard>
      <SectionCard title="Offline access">
        <Text style={styles.bodyText}>USSD fallback: dial *920# to verify if you are offline.</Text>
      </SectionCard>
      <SectionCard title="Continue">
        <Text style={styles.bodyText}>Access your workspace after authentication.</Text>
        <Text style={styles.link} onPress={onContinue}>
          Go to dashboard
        </Text>
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
  link: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: colors.green,
  },
});
