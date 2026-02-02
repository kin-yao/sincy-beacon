import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenContainer } from '../components/ScreenContainer';
import { colors } from '../theme/colors';

type SignupScreenProps = {
  role: 'farmer' | 'agrovet';
  onContinue: () => void;
};

export function SignupScreen({ role, onContinue }: SignupScreenProps) {
  const navigation = useNavigation();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const roleLabel = role === 'farmer' ? 'Farmer' : 'Agrovet';
  return (
    <ScreenContainer>
      <Pressable onPress={() => navigation.goBack()} style={styles.back}>
        <Text style={styles.backText}>← Back</Text>
      </Pressable>
      <View style={styles.header}>
        <Text style={styles.title}>Create {roleLabel} Account</Text>
        <Text style={styles.subtitle}>
          Join Sincy to verify authentic inputs
        </Text>
      </View>
      <View style={styles.formCard}>
        <View style={styles.field}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput placeholder="e.g., Jane Kipchoge" style={styles.input} placeholderTextColor={colors.grayMedium} />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput placeholder="+254 7XX XXX XXX" style={styles.input} placeholderTextColor={colors.grayMedium} />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>National ID</Text>
          <TextInput placeholder="12345678" style={styles.input} placeholderTextColor={colors.grayMedium} />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Select SACCO</Text>
          <View style={styles.select}>
            <Text style={styles.selectText}>-- Choose your SACCO --</Text>
            <Ionicons name="chevron-down" size={18} color={colors.grayMuted} />
          </View>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Create PIN (4 digits)</Text>
          <TextInput placeholder="••••" style={styles.input} placeholderTextColor={colors.grayMedium} secureTextEntry />
        </View>
        <Pressable style={styles.checkboxRow} onPress={() => setAcceptedTerms((prev) => !prev)}>
          <View style={[styles.checkbox, acceptedTerms && styles.checkboxChecked]}>
            {acceptedTerms ? <Ionicons name="checkmark" size={14} color={colors.white} /> : null}
          </View>
          <Text style={styles.checkboxText}>
            I agree to the Terms of Service and Privacy Policy
          </Text>
        </Pressable>
        <PrimaryButton label="Create Account" onPress={onContinue} />
        <View style={styles.dividerRow}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or register via USSD</Text>
          <View style={styles.divider} />
        </View>
        <View style={styles.ussdCard}>
          <Text style={styles.ussdText}>Dial *920# for USSD Registration</Text>
        </View>
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
  select: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: colors.grayLight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectText: {
    color: colors.grayMuted,
    fontSize: 13,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: colors.grayMedium,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  checkboxChecked: {
    backgroundColor: colors.green,
    borderColor: colors.green,
  },
  checkboxText: {
    fontSize: 12,
    color: colors.grayMuted,
    flex: 1,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  dividerText: {
    fontSize: 11,
    color: colors.grayMuted,
  },
  ussdCard: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  ussdText: {
    fontSize: 12,
    color: colors.grayDark,
  },
});
