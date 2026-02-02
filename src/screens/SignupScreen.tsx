import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenContainer } from '../components/ScreenContainer';
import { useAppTheme } from '../theme/theme';

type SignupScreenProps = {
  role: 'farmer' | 'agrovet';
  onContinue: () => void;
};

export function SignupScreen({ role, onContinue }: SignupScreenProps) {
  const navigation = useNavigation();
  const { colors } = useAppTheme();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const roleLabel = role === 'farmer' ? 'Farmer' : 'Agrovet';
  return (
    <ScreenContainer>
      <Pressable onPress={() => navigation.goBack()} style={styles.back}>
        <Text style={[styles.backText, { color: colors.grayMuted }]}>← Back</Text>
      </Pressable>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Create {roleLabel} Account</Text>
        <Text style={[styles.subtitle, { color: colors.grayMuted }]}>
          Join Sincy to verify authentic inputs
        </Text>
      </View>
      <View style={[styles.formCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <View style={styles.field}>
          <Text style={[styles.label, { color: colors.text }]}>Full Name</Text>
          <TextInput
            placeholder="e.g., Jane Kipchoge"
            style={[styles.input, { borderColor: colors.border, backgroundColor: colors.grayLight, color: colors.text }]}
            placeholderTextColor={colors.grayMedium}
          />
        </View>
        <View style={styles.field}>
          <Text style={[styles.label, { color: colors.text }]}>Phone Number</Text>
          <TextInput
            placeholder="+254 7XX XXX XXX"
            style={[styles.input, { borderColor: colors.border, backgroundColor: colors.grayLight, color: colors.text }]}
            placeholderTextColor={colors.grayMedium}
          />
        </View>
        <View style={styles.field}>
          <Text style={[styles.label, { color: colors.text }]}>National ID</Text>
          <TextInput
            placeholder="12345678"
            style={[styles.input, { borderColor: colors.border, backgroundColor: colors.grayLight, color: colors.text }]}
            placeholderTextColor={colors.grayMedium}
          />
        </View>
        <View style={styles.field}>
          <Text style={[styles.label, { color: colors.text }]}>Select SACCO</Text>
          <View style={[styles.select, { borderColor: colors.border, backgroundColor: colors.grayLight }]}>
            <Text style={[styles.selectText, { color: colors.grayMuted }]}>-- Choose your SACCO --</Text>
            <Ionicons name="chevron-down" size={18} color={colors.grayMuted} />
          </View>
        </View>
        <View style={styles.field}>
          <Text style={[styles.label, { color: colors.text }]}>Create PIN (4 digits)</Text>
          <TextInput
            placeholder="••••"
            style={[styles.input, { borderColor: colors.border, backgroundColor: colors.grayLight, color: colors.text }]}
            placeholderTextColor={colors.grayMedium}
            secureTextEntry
          />
        </View>
        <Pressable style={styles.checkboxRow} onPress={() => setAcceptedTerms((prev) => !prev)}>
          <View
            style={[
              styles.checkbox,
              { borderColor: colors.grayMedium, backgroundColor: colors.card },
              acceptedTerms && [styles.checkboxChecked, { backgroundColor: colors.green, borderColor: colors.green }],
            ]}
          >
            {acceptedTerms ? <Ionicons name="checkmark" size={14} color={colors.white} /> : null}
          </View>
          <Text style={[styles.checkboxText, { color: colors.grayMuted }]}>
            I agree to the Terms of Service and Privacy Policy
          </Text>
        </Pressable>
        <PrimaryButton label="Create Account" onPress={onContinue} />
        <View style={styles.dividerRow}>
          <View style={[styles.divider, { backgroundColor: colors.border }]} />
          <Text style={[styles.dividerText, { color: colors.grayMuted }]}>or register via USSD</Text>
          <View style={[styles.divider, { backgroundColor: colors.border }]} />
        </View>
        <View style={[styles.ussdCard, { borderColor: colors.border }]}>
          <Text style={[styles.ussdText, { color: colors.text }]}>Dial *920# for USSD Registration</Text>
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
  select: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectText: {
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
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {},
  checkboxText: {
    fontSize: 12,
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
  },
  dividerText: {
    fontSize: 11,
  },
  ussdCard: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  ussdText: {
    fontSize: 12,
  },
});
