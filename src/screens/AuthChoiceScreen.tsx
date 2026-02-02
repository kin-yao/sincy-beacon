import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenContainer } from '../components/ScreenContainer';
import { useAppTheme } from '../theme/theme';

type AuthChoiceScreenProps = {
  role: 'farmer' | 'agrovet';
  onLogin: () => void;
  onSignup: () => void;
};

export function AuthChoiceScreen({ role, onLogin, onSignup }: AuthChoiceScreenProps) {
  const navigation = useNavigation();
  const roleLabel = role === 'farmer' ? 'Farmer' : 'Agrovet';
  return (
    <ScreenContainer>
      <Pressable onPress={() => navigation.goBack()} style={styles.back}>
        <Text style={styles.backText}>← Back</Text>
      </Pressable>
      <View style={styles.header}>
        <Text style={styles.title}>{roleLabel} Account</Text>
        <Text style={styles.subtitle}>Choose how to proceed</Text>
      </View>
      <PrimaryButton label="Sign In" onPress={onLogin} />
      <PrimaryButton label="Create New Account" onPress={onSignup} variant="outline" />
      <View style={styles.callout}>
        <Text style={styles.calloutText}>
          Already have an account? Use Sign In to access your existing account.
        </Text>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  back: {
    alignSelf: 'flex-start',
  },
  backText: {
    color: colors.grayMuted,
    fontSize: 14,
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
    color: colors.grayMuted,
    marginTop: 4,
  },
  callout: {
    backgroundColor: colors.greenPale,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#B8D7C0',
  },
  calloutText: {
    fontSize: 12,
    textAlign: 'center',
    color: colors.grayDark,
  },
});
