import React, { useEffect, useState } from 'react';
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

import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionCard } from '../components/SectionCard';
import { colors } from '../theme/colors';

export function FarmerVerifyScreen() {
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
  historyItem: {
    fontSize: 13,
    color: colors.grayDark,
    marginBottom: 6,
  },
});
