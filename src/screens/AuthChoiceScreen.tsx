import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenContainer } from '../components/ScreenContainer';
import { colors } from '../theme/colors';

type AuthChoiceScreenProps = {
  role: 'farmer' | 'agrovet';
  onLogin: () => void;
  onSignup: () => void;
};

export function AuthChoiceScreen({ role, onLogin, onSignup }: AuthChoiceScreenProps) {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Sign in as {role === 'farmer' ? 'Farmer' : 'Agrovet'}</Text>
      <Text style={styles.subtitle}>Use your phone number and 4-digit PIN.</Text>
      <PrimaryButton label="Login" onPress={onLogin} />
      <PrimaryButton label="Create account" onPress={onSignup} variant="outline" />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.grayDark,
  },
  subtitle: {
    fontSize: 14,
    color: colors.grayDark,
  },
});
