import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionCard } from '../components/SectionCard';
import { TextField } from '../components/TextField';
import { loadJson, saveJson } from '../storage/localStorage';
import { colors } from '../theme/colors';

export function FarmerVerifyScreen() {
  const [barcode, setBarcode] = useState('');
  const [productName, setProductName] = useState('');
  const [history, setHistory] = useState<{ barcode: string; productName: string }[]>([]);

  useEffect(() => {
    loadJson('verification:history', [] as { barcode: string; productName: string }[]).then(setHistory);
  }, []);

  const handleVerify = async () => {
    const record = { barcode, productName };
    const next = [record, ...history].slice(0, 5);
    setHistory(next);
    await saveJson('verification:history', next);
  };

  return (
    <ScreenContainer>
      <Text style={styles.title}>Verify Product</Text>
      <SectionCard title="Scanner ready">
        <Text style={styles.bodyText}>Use the camera to scan Code128, EAN-13, or QR codes.</Text>
      </SectionCard>
      <SectionCard title="Manual lookup">
        <Text style={styles.bodyText}>Search by product name or barcode when offline.</Text>
        <View style={styles.form}>
          <TextField label="Barcode" value={barcode} onChangeText={setBarcode} keyboardType="numeric" />
          <TextField label="Product name" value={productName} onChangeText={setProductName} />
          <PrimaryButton label="Save verification" onPress={handleVerify} />
        </View>
      </SectionCard>
      <SectionCard title="Recent verifications">
        {history.length === 0 ? (
          <Text style={styles.bodyText}>No offline verifications yet.</Text>
        ) : (
          history.map((item, index) => (
            <Text key={`${item.barcode}-${index}`} style={styles.historyItem}>
              {item.productName || 'Unknown product'} • {item.barcode || 'No barcode'}
            </Text>
          ))
        )}
      </SectionCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.grayLight,
  },
  content: {
    padding: 16,
    gap: 12,
  },
  centerCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    gap: 10,
  },
  cameraIcon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.greenLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 12,
    color: colors.grayMuted,
    textAlign: 'center',
  },
  manualTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.grayDark,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: colors.white,
    color: colors.grayDark,
  },
  searchButton: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  searchText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.grayDark,
  },
  form: {
    marginTop: 12,
  },
  historyItem: {
    fontSize: 13,
    color: colors.grayDark,
    marginBottom: 6,
  },
});
