import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { AppHeader } from '../components/AppHeader';
import { PrimaryButton } from '../components/PrimaryButton';
import { TopNavBar } from '../components/TopNavBar';
import { useAppTheme } from '../theme/theme';
import { loadJson, saveJson } from '../storage/localStorage';

type VerificationRecord = {
  barcode: string;
  productName: string;
  at: number;
};

export function FarmerVerifyScreen() {
  const { colors } = useAppTheme();

  const [barcode, setBarcode] = useState('');
  const [productName, setProductName] = useState('');
  const [history, setHistory] = useState<VerificationRecord[]>([]);

  useEffect(() => {
    loadJson<VerificationRecord[]>('verification:history', []).then(setHistory).catch(() => {
      // ignore if missing
    });
  }, []);

  const tabs = [
    { label: 'Home', route: 'Home', icon: (c: string) => <Ionicons name="home-outline" size={16} color={c} /> },
    { label: 'Verify', route: 'Verify', icon: (c: string) => <Ionicons name="camera-outline" size={16} color={c} /> },
    { label: 'Products', route: 'Products', icon: (c: string) => <MaterialCommunityIcons name="cube-outline" size={16} color={c} /> },
    { label: 'Alerts', route: 'Alerts', icon: (c: string) => <Ionicons name="notifications-outline" size={16} color={c} /> },
    { label: 'Payments', route: 'Payments', icon: (c: string) => <Ionicons name="card-outline" size={16} color={c} /> },
    { label: 'Profile', route: 'Profile', icon: (c: string) => <Ionicons name="person-outline" size={16} color={c} /> },
  ];

  const handleSaveVerification = async () => {
    const b = barcode.trim();
    const p = productName.trim();

    if (!b && !p) return;

    const record: VerificationRecord = { barcode: b, productName: p, at: Date.now() };
    const next = [record, ...history].slice(0, 5);

    setHistory(next);
    setBarcode('');
    setProductName('');

    try {
      await saveJson('verification:history', next);
    } catch {
      // ignore write failure for now
    }
  };

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <AppHeader title="Sincy Farmer" subtitle="Jane Kipchoge" onLogout={() => {}} />
      <TopNavBar tabs={tabs} />

      <View style={styles.content}>
        {/* Scanner card */}
        <View style={[styles.centerCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={[styles.cameraIcon, { backgroundColor: colors.greenLight }]}>
            <Ionicons name="camera-outline" size={38} color={colors.green} />
          </View>
          <Text style={[styles.title, { color: colors.text }]}>Ready to Verify?</Text>
          <Text style={[styles.subtitle, { color: colors.grayMuted }]}>
            Tap the button below to scan a barcode (camera scanner placeholder).
          </Text>

          <PrimaryButton
            label="Open Scanner"
            onPress={() => {}}
            icon={<Ionicons name="qr-code-outline" size={18} color={colors.white} />}
          />
        </View>

        {/* Manual lookup */}
        <Text style={[styles.manualTitle, { color: colors.text }]}>Or enter manually:</Text>

        <Text style={[styles.label, { color: colors.grayMuted }]}>Barcode</Text>
        <TextInput
          value={barcode}
          onChangeText={setBarcode}
          placeholder="Enter barcode number"
          placeholderTextColor={colors.grayMedium}
          keyboardType="number-pad"
          style={[styles.input, { borderColor: colors.border, backgroundColor: colors.card, color: colors.text }]}
        />

        <Text style={[styles.label, { color: colors.grayMuted }]}>Product name (optional)</Text>
        <TextInput
          value={productName}
          onChangeText={setProductName}
          placeholder="e.g., DAP Fertilizer 50kg"
          placeholderTextColor={colors.grayMedium}
          style={[styles.input, { borderColor: colors.border, backgroundColor: colors.card, color: colors.text }]}
        />

        <PrimaryButton label="Save verification (offline)" onPress={handleSaveVerification} />

        {/* History */}
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Recent verifications</Text>
        <View style={[styles.historyCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          {history.length === 0 ? (
            <Text style={[styles.historyEmpty, { color: colors.grayMuted }]}>No offline verifications yet.</Text>
          ) : (
            history.map((item, idx) => (
              <Text key={`${item.at}-${idx}`} style={[styles.historyItem, { color: colors.text }]}>
                {item.productName || 'Unknown product'} • {item.barcode || 'No barcode'}
              </Text>
            ))
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { padding: 16, gap: 10 },

  centerCard: {
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    alignItems: 'center',
    gap: 10,
  },
  cameraIcon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
  },

  manualTitle: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: '600',
  },
  label: {
    fontSize: 12,
    marginTop: 6,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
  },

  sectionTitle: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: '700',
  },
  historyCard: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    gap: 6,
  },
  historyEmpty: {
    fontSize: 12,
  },
  historyItem: {
    fontSize: 13,
  },
});
