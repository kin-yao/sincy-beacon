import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionCard } from '../components/SectionCard';
import { TextField } from '../components/TextField';
import { loadJson, saveJson } from '../storage/localStorage';
import { colors } from '../theme/colors';

export function AgrovetScanScreen() {
  const [farmerNid, setFarmerNid] = useState('');
  const [farmerPhone, setFarmerPhone] = useState('');
  const [productBarcode, setProductBarcode] = useState('');
  const [productName, setProductName] = useState('');
  const [recentFarmers, setRecentFarmers] = useState<{ nid: string; phone: string }[]>([]);

  useEffect(() => {
    loadJson('agrovet:recentFarmers', [] as { nid: string; phone: string }[]).then(setRecentFarmers);
  }, []);

  const handleSaveFarmer = async () => {
    const entry = { nid: farmerNid, phone: farmerPhone };
    const next = [entry, ...recentFarmers].slice(0, 5);
    setRecentFarmers(next);
    await saveJson('agrovet:recentFarmers', next);
  };

  const handleSaveProduct = async () => {
    await saveJson('agrovet:lastProduct', { barcode: productBarcode, name: productName });
  };

  return (
    <ScreenContainer>
      <Text style={styles.title}>Scan & Verify</Text>
      <SectionCard title="Farmer registration">
        <Text style={styles.bodyText}>Scan National ID to register farmer to your network.</Text>
        <View style={styles.form}>
          <TextField
            label="Farmer National ID"
            value={farmerNid}
            onChangeText={setFarmerNid}
            keyboardType="numeric"
          />
          <TextField
            label="Farmer phone"
            value={farmerPhone}
            onChangeText={setFarmerPhone}
            keyboardType="phone-pad"
          />
          <PrimaryButton label="Save farmer" onPress={handleSaveFarmer} />
        </View>
        {recentFarmers.length > 0 && (
          <View style={styles.list}>
            {recentFarmers.map((farmer, index) => (
              <Text key={`${farmer.nid}-${index}`} style={styles.historyItem}>
                {farmer.nid} • {farmer.phone}
              </Text>
            ))}
          </View>
        )}
      </SectionCard>
      <SectionCard title="Product verification">
        <Text style={styles.bodyText}>Authenticate barcodes and record transactions instantly.</Text>
        <View style={styles.form}>
          <TextField
            label="Product barcode"
            value={productBarcode}
            onChangeText={setProductBarcode}
            keyboardType="numeric"
          />
          <TextField label="Product name" value={productName} onChangeText={setProductName} />
          <PrimaryButton label="Save product" onPress={handleSaveProduct} />
        </View>
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
    color: colors.grayDark,
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
  list: {
    marginTop: 12,
  },
  historyItem: {
    fontSize: 13,
    color: colors.grayDark,
    marginBottom: 6,
  },
});
