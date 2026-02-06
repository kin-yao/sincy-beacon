import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenContainer } from '../components/ScreenContainer';
import { useAppTheme } from '../theme/theme';

type LoginScreenProps = {
  role: 'farmer' | 'agrovet';
  onContinue: () => void;
};

export function LoginScreen({ role, onContinue }: LoginScreenProps) {
  const navigation = useNavigation();
  const { colors } = useAppTheme();
  const roleLabel = role === 'farmer' ? 'Farmer' : 'Agrovet';
  return (
    <ScreenContainer>
      <Pressable onPress={() => navigation.goBack()} style={styles.back}>
        <Text style={[styles.backText, { color: colors.grayMuted }]}>← Back</Text>
      </Pressable>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>{roleLabel} Sign In</Text>
        <Text style={[styles.subtitle, { color: colors.grayMuted }]}>Use your phone number and 4-digit PIN.</Text>
      </View>
      <View style={[styles.formCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <View style={styles.field}>
          <Text style={[styles.label, { color: colors.text }]}>Phone Number</Text>
          <TextInput
            placeholder="+254 7XX XXX XXX"
            style={[styles.input, { borderColor: colors.border, backgroundColor: colors.grayLight, color: colors.text }]}
            placeholderTextColor={colors.grayMedium}
          />
        </View>
        <View style={styles.field}>
          <Text style={[styles.label, { color: colors.text }]}>PIN (4 digits)</Text>
          <TextInput
            placeholder="••••"
            style={[styles.input, { borderColor: colors.border, backgroundColor: colors.grayLight, color: colors.text }]}
            placeholderTextColor={colors.grayMedium}
            secureTextEntry
          />
        </View>
        <PrimaryButton label="Sign In" onPress={onContinue} />
      </View>
      <View style={[styles.ussdCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.ussdTitle, { color: colors.text }]}>Offline access</Text>
        <Text style={[styles.ussdText, { color: colors.grayMuted }]}>
          Dial *920# to verify when you are offline.
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
    gap: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 13,
  },
  formCard: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    gap: 12,
  },
  field: {
    gap: 6,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  ussdCard: {
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
  },
  ussdTitle: {
    fontSize: 13,
    fontWeight: '700',
  },
  ussdText: {
    fontSize: 12,
    marginTop: 4,
  },
});
