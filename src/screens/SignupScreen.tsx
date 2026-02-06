import React, { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenContainer } from '../components/ScreenContainer';
import { useAppTheme } from '../theme/theme';
import { loadJson, saveJson } from '../storage/localStorage';

type SignupScreenProps = {
  role: 'farmer' | 'agrovet';
  onContinue: () => void;
};

type FarmerForm = {
  name: string;
  phone: string;
  nid: string;
  sacco: string;
  pin: string;
};

type AgrovetForm = {
  storeName: string;
  ownerName: string;
  license: string;
  location: string;
  phone: string;
  pin: string;
};

export function SignupScreen({ role, onContinue }: SignupScreenProps) {
  const navigation = useNavigation();
  const { colors } = useAppTheme();

  const roleLabel = role === 'farmer' ? 'Farmer' : 'Agrovet';

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  const [farmerForm, setFarmerForm] = useState<FarmerForm>({
    name: '',
    phone: '',
    nid: '',
    sacco: '',
    pin: '',
  });

  const [agrovetForm, setAgrovetForm] = useState<AgrovetForm>({
    storeName: '',
    ownerName: '',
    license: '',
    location: '',
    phone: '',
    pin: '',
  });

  // Load saved draft from device
  useEffect(() => {
    loadJson<FarmerForm>('signup:farmer', farmerForm).then(setFarmerForm).catch(() => {});
    loadJson<AgrovetForm>('signup:agrovet', agrovetForm).then(setAgrovetForm).catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isValid = useMemo(() => {
    if (!acceptedTerms) return false;

    if (role === 'farmer') {
      return (
        farmerForm.name.trim().length >= 2 &&
        farmerForm.phone.trim().length >= 10 &&
        farmerForm.nid.trim().length >= 6 &&
        farmerForm.sacco.trim().length >= 2 &&
        farmerForm.pin.trim().length === 4
      );
    }

    return (
      agrovetForm.storeName.trim().length >= 2 &&
      agrovetForm.ownerName.trim().length >= 2 &&
      agrovetForm.license.trim().length >= 2 &&
      agrovetForm.location.trim().length >= 2 &&
      agrovetForm.phone.trim().length >= 10 &&
      agrovetForm.pin.trim().length === 4
    );
  }, [acceptedTerms, role, farmerForm, agrovetForm]);

  const handleCreate = async () => {
    if (!isValid) return;

    setStatus('saving');
    try {
      if (role === 'farmer') {
        await saveJson('signup:farmer', farmerForm);
      } else {
        await saveJson('signup:agrovet', agrovetForm);
      }
      setStatus('saved');
    } catch {
      setStatus('idle');
    }

    onContinue();
  };

  const setField = (key: keyof FarmerForm, value: string) =>
    setFarmerForm((prev) => ({ ...prev, [key]: value }));

  const setAgroField = (key: keyof AgrovetForm, value: string) =>
    setAgrovetForm((prev) => ({ ...prev, [key]: value }));

  return (
    <ScreenContainer>
      <Pressable onPress={() => navigation.goBack()} style={styles.back} accessibilityRole="button">
        <Text style={[styles.backText, { color: colors.grayMuted }]}>← Back</Text>
      </Pressable>

      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Create {roleLabel} Account</Text>
        <Text style={[styles.subtitle, { color: colors.grayMuted }]}>
          Join Sincy to verify authentic inputs (works offline too).
        </Text>
      </View>

      <View style={[styles.formCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
        {role === 'farmer' ? (
          <>
            <Field
              label="Full Name"
              value={farmerForm.name}
              onChangeText={(v) => setField('name', v)}
              placeholder="e.g., Jane Kipchoge"
              colors={colors}
            />
            <Field
              label="Phone Number"
              value={farmerForm.phone}
              onChangeText={(v) => setField('phone', v)}
              placeholder="+254 7XX XXX XXX"
              keyboardType="phone-pad"
              colors={colors}
            />
            <Field
              label="National ID"
              value={farmerForm.nid}
              onChangeText={(v) => setField('nid', v)}
              placeholder="12345678"
              keyboardType="number-pad"
              colors={colors}
            />

            {/* Simple SACCO selector placeholder */}
            <View style={styles.field}>
              <Text style={[styles.label, { color: colors.text }]}>Select SACCO</Text>
              <Pressable
                onPress={() => {
                  // placeholder: cycle through common examples
                  const options = ['Kagema SACCO', 'Tai SACCO', 'Mwalimu SACCO', 'Unaitas SACCO'];
                  const current = farmerForm.sacco || options[0];
                  const next = options[(options.indexOf(current) + 1) % options.length];
                  setField('sacco', next);
                }}
                style={[
                  styles.select,
                  { borderColor: colors.border, backgroundColor: colors.grayLight },
                ]}
              >
                <Text style={[styles.selectText, { color: farmerForm.sacco ? colors.text : colors.grayMuted }]}>
                  {farmerForm.sacco || '-- Choose your SACCO (tap to cycle) --'}
                </Text>
                <Ionicons name="chevron-down" size={18} color={colors.grayMuted} />
              </Pressable>
            </View>

            <Field
              label="Create PIN (4 digits)"
              value={farmerForm.pin}
              onChangeText={(v) => setField('pin', v.replace(/\D/g, '').slice(0, 4))}
              placeholder="••••"
              keyboardType="number-pad"
              secureTextEntry
              colors={colors}
            />
          </>
        ) : (
          <>
            <Field
              label="Agrovet / Store Name"
              value={agrovetForm.storeName}
              onChangeText={(v) => setAgroField('storeName', v)}
              placeholder="e.g., Green Farm Agrovet"
              colors={colors}
            />
            <Field
              label="Owner Name"
              value={agrovetForm.ownerName}
              onChangeText={(v) => setAgroField('ownerName', v)}
              placeholder="e.g., Samuel Kiplagat"
              colors={colors}
            />
            <Field
              label="Business License"
              value={agrovetForm.license}
              onChangeText={(v) => setAgroField('license', v)}
              placeholder="e.g., NCPB-LIC-2045"
              colors={colors}
            />
            <Field
              label="Location"
              value={agrovetForm.location}
              onChangeText={(v) => setAgroField('location', v)}
              placeholder="e.g., Nakuru Town"
              colors={colors}
            />
            <Field
              label="Phone Number"
              value={agrovetForm.phone}
              onChangeText={(v) => setAgroField('phone', v)}
              placeholder="+254 7XX XXX XXX"
              keyboardType="phone-pad"
              colors={colors}
            />
            <Field
              label="Create PIN (4 digits)"
              value={agrovetForm.pin}
              onChangeText={(v) => setAgroField('pin', v.replace(/\D/g, '').slice(0, 4))}
              placeholder="••••"
              keyboardType="number-pad"
              secureTextEntry
              colors={colors}
            />
          </>
        )}

        <Pressable style={styles.checkboxRow} onPress={() => setAcceptedTerms((p) => !p)}>
          <View
            style={[
              styles.checkbox,
              { borderColor: colors.grayMedium, backgroundColor: colors.card },
              acceptedTerms && { backgroundColor: colors.green, borderColor: colors.green },
            ]}
          >
            {acceptedTerms ? <Ionicons name="checkmark" size={14} color={colors.white} /> : null}
          </View>
          <Text style={[styles.checkboxText, { color: colors.grayMuted }]}>
            I agree to the Terms of Service and Privacy Policy
          </Text>
        </Pressable>

        {status === 'saving' ? (
          <Text style={[styles.statusText, { color: colors.grayMuted }]}>Saving on device…</Text>
        ) : status === 'saved' ? (
          <Text style={[styles.statusText, { color: colors.green }]}>Saved for offline use ✔</Text>
        ) : null}

        <PrimaryButton label="Create Account" onPress={handleCreate} />

        <View style={styles.dividerRow}>
          <View style={[styles.divider, { backgroundColor: colors.border }]} />
          <Text style={[styles.dividerText, { color: colors.grayMuted }]}>or register via USSD</Text>
          <View style={[styles.divider, { backgroundColor: colors.border }]} />
        </View>

        <View style={[styles.ussdCard, { borderColor: colors.border, backgroundColor: colors.grayLight }]}>
          <Text style={[styles.ussdText, { color: colors.text }]}>Dial *920# for USSD Registration</Text>
        </View>

        {/* Optional: disable hint */}
        {!isValid ? (
          <Text style={[styles.hint, { color: colors.grayMuted }]}>
            Fill required fields, set a 4-digit PIN, and accept terms to continue.
          </Text>
        ) : null}
      </View>
    </ScreenContainer>
  );
}

function Field(props: {
  label: string;
  value: string;
  onChangeText: (v: string) => void;
  placeholder: string;
  colors: any;
  keyboardType?: 'default' | 'number-pad' | 'phone-pad';
  secureTextEntry?: boolean;
}) {
  const { label, value, onChangeText, placeholder, colors, keyboardType, secureTextEntry } = props;
  return (
    <View style={styles.field}>
      <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.grayMedium}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={[
          styles.input,
          { borderColor: colors.border, backgroundColor: colors.grayLight, color: colors.text },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  back: { alignSelf: 'flex-start' },
  backText: { fontSize: 14 },

  header: { alignItems: 'center', gap: 6, marginBottom: 10 },
  title: { fontSize: 22, fontWeight: '700', textAlign: 'center' },
  subtitle: { fontSize: 13, textAlign: 'center', lineHeight: 18 },

  formCard: { padding: 16, borderRadius: 16, borderWidth: 1, gap: 12 },

  field: { gap: 6 },
  label: { fontSize: 12, fontWeight: '600' },
  input: { borderWidth: 1, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 10, fontSize: 14 },

  select: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectText: { fontSize: 13 },

  checkboxRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 2 },
  checkbox: { width: 18, height: 18, borderWidth: 1, borderRadius: 4, alignItems: 'center', justifyContent: 'center' },
  checkboxText: { fontSize: 12, flex: 1 },

  statusText: { marginTop: 2, fontSize: 12 },

  dividerRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 6 },
  divider: { flex: 1, height: 1 },
  dividerText: { fontSize: 11 },

  ussdCard: { borderWidth: 1, borderRadius: 10, paddingVertical: 12, alignItems: 'center' },
  ussdText: { fontSize: 12, fontWeight: '600' },

  hint: { fontSize: 11, textAlign: 'center', lineHeight: 16, marginTop: 2 },
});
