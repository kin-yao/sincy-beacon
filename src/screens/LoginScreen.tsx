import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenContainer } from '../components/ScreenContainer';
import { useAppTheme } from '../theme/theme';
import { loadJson, saveJson } from '../storage/localStorage';

type LoginScreenProps = {
  role: 'farmer' | 'agrovet';
  onContinue: () => void;
};

type SavedLogin = { phone: string; pin: string };

export function LoginScreen({ role, onContinue }: LoginScreenProps) {
  const navigation = useNavigation();
  const { colors } = useAppTheme();

  const roleLabel = role === 'farmer' ? 'Farmer' : 'Agrovet';

  const [phone, setPhone] = useState('');
  const [pin, setPin] = useState('');
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  useEffect(() => {
    loadJson<SavedLogin>(`login:${role}`, { phone: '', pin: '' })
      .then((data) => {
        setPhone(data?.phone ?? '');
        setPin(data?.pin ?? '');
      })
      .catch(() => {
        // ignore if nothing saved yet
      });
  }, [role]);

  const handleSignIn = async () => {
    // Save locally so user can still access when offline later
    setStatus('saving');
    try {
      await saveJson(`login:${role}`, { phone: phone.trim(), pin: pin.trim() });
      setStatus('saved');
    } catch {
      setStatus('idle');
    }
    onContinue();
  };

  return (
    <ScreenContainer>
      <Pressable onPress={() => navigation.goBack()} style={styles.back} accessibilityRole="button">
        <Text style={[styles.backText, { color: colors.grayMuted }]}>← Back</Text>
      </Pressable>

      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>{roleLabel} Sign In</Text>
        <Text style={[styles.subtitle, { color: colors.grayMuted }]}>
          Use your phone number and 4-digit PIN.
        </Text>
      </View>

      <View style={[styles.formCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <View style={styles.field}>
          <Text style={[styles.label, { color: colors.text }]}>Phone Number</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            placeholder="+254 7XX XXX XXX"
            keyboardType="phone-pad"
            placeholderTextColor={colors.grayMedium}
            style={[
              styles.input,
              { borderColor: colors.border, backgroundColor: colors.grayLight, color: colors.text },
            ]}
          />
        </View>

        <View style={styles.field}>
          <Text style={[styles.label, { color: colors.text }]}>PIN (4 digits)</Text>
          <TextInput
            value={pin}
            onChangeText={setPin}
            placeholder="••••"
            keyboardType="number-pad"
            maxLength={4}
            secureTextEntry
            placeholderTextColor={colors.grayMedium}
            style={[
              styles.input,
              { borderColor: colors.border, backgroundColor: colors.grayLight, color: colors.text },
            ]}
          />
        </View>

        {status === 'saving' ? (
          <Text style={[styles.statusText, { color: colors.grayMuted }]}>Saving on device…</Text>
        ) : status === 'saved' ? (
          <Text style={[styles.statusText, { color: colors.green }]}>Saved for offline use ✔</Text>
        ) : null}

        <PrimaryButton label="Sign In" onPress={handleSignIn} />
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
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
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
    fontSize: 14,
  },
  statusText: {
    marginTop: 2,
    fontSize: 12,
  },

  ussdCard: {
    marginTop: 12,
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
    lineHeight: 18,
  },
});
