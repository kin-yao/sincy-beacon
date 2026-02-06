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
  const { colors } = useAppTheme();
  const roleLabel = role === 'farmer' ? 'Farmer' : 'Agrovet';
  return (
    <ScreenContainer>
      <Pressable onPress={() => navigation.goBack()} style={styles.back}>
        <Text style={[styles.backText, { color: colors.grayMuted }]}>← Back</Text>
      </Pressable>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>{roleLabel} Account</Text>
        <Text style={[styles.subtitle, { color: colors.grayMuted }]}>Choose how to proceed</Text>
      </View>
      <PrimaryButton label="Sign In" onPress={onLogin} />
      <PrimaryButton label="Create New Account" onPress={onSignup} variant="outline" />
      <View style={[styles.callout, { backgroundColor: colors.greenPale, borderColor: colors.green }]}>
        <Text style={[styles.calloutText, { color: colors.text }]}>
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
    marginTop: 4,
  },
  callout: {
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
  },
  calloutText: {
    fontSize: 12,
    textAlign: 'center',
  },
});
