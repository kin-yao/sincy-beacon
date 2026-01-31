import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionCard } from '../components/SectionCard';
import { TextField } from '../components/TextField';
import { loadJson, saveJson } from '../storage/localStorage';
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
  const [phone, setPhone] = useState('');
  const [pin, setPin] = useState('');
  const [status, setStatus] = useState('Ready');

  useEffect(() => {
    loadJson<{ phone: string; pin: string }>(`login:${role}`, { phone: '', pin: '' }).then((data) => {
      setPhone(data.phone);
      setPin(data.pin);
    });
  }, [role]);

  const handleSave = async () => {
    setStatus('Saving...');
    await saveJson(`login:${role}`, { phone, pin });
    setStatus('Saved on device');
  };

  return (
    <ScreenContainer>
      <Text style={styles.title}>Login</Text>
      <SectionCard title="Phone & PIN">
        <Text style={styles.bodyText}>Enter your phone number and 4-digit PIN to access the {role} dashboard.</Text>
        <View style={styles.form}>
          <TextField label="Phone number" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
          <TextField
            label="4-digit PIN"
            value={pin}
            onChangeText={setPin}
            keyboardType="numeric"
            secureTextEntry
          />
          <PrimaryButton label="Save login on device" onPress={handleSave} />
          <Text style={styles.statusText}>{status}</Text>
        </View>
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
  form: {
    marginTop: 12,
  },
  statusText: {
    marginTop: 8,
    color: colors.greenDark,
    fontSize: 13,
  },
  link: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: colors.green,
  },
});
