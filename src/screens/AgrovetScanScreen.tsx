import React, { useEffect, useState } from 'react';
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
  list: {
    marginTop: 12,
  },
  historyItem: {
    fontSize: 13,
    color: colors.grayDark,
    marginBottom: 6,
  },
});
