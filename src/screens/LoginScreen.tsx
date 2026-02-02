import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenContainer } from '../components/ScreenContainer';
import { colors } from '../theme/colors';

type LoginScreenProps = {
  role: 'farmer' | 'agrovet';
  onContinue: () => void;
};

export function LoginScreen({ role, onContinue }: LoginScreenProps) {
  const navigation = useNavigation();
  const roleLabel = role === 'farmer' ? 'Farmer' : 'Agrovet';
  return (
    <ScreenContainer>
      <Pressable onPress={() => navigation.goBack()} style={styles.back}>
        <Text style={styles.backText}>← Back</Text>
      </Pressable>
      <View style={styles.header}>
        <Text style={styles.title}>{roleLabel} Sign In</Text>
        <Text style={styles.subtitle}>Use your phone number and 4-digit PIN.</Text>
      </View>
      <View style={styles.formCard}>
        <View style={styles.field}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput placeholder="+254 7XX XXX XXX" style={styles.input} placeholderTextColor={colors.grayMedium} />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>PIN (4 digits)</Text>
          <TextInput placeholder="••••" style={styles.input} placeholderTextColor={colors.grayMedium} secureTextEntry />
        </View>
        <PrimaryButton label="Sign In" onPress={onContinue} />
      </View>
      <View style={styles.ussdCard}>
        <Text style={styles.ussdTitle}>Offline access</Text>
        <Text style={styles.ussdText}>Dial *920# to verify when you are offline.</Text>
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
    gap: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.grayDark,
  },
  subtitle: {
    fontSize: 13,
    color: colors.grayMuted,
  },
  formCard: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 12,
  },
  field: {
    gap: 6,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.grayDark,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: colors.grayLight,
    color: colors.grayDark,
  },
  ussdCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  ussdTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.grayDark,
  },
  ussdText: {
    fontSize: 12,
    color: colors.grayMuted,
    marginTop: 4,
  },
});
