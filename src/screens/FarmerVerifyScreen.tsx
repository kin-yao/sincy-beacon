import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppHeader } from '../components/AppHeader';
import { PrimaryButton } from '../components/PrimaryButton';
import { colors } from '../theme/colors';

export function FarmerVerifyScreen() {
  return (
    <View style={styles.screen}>
      <AppHeader title="Sincy Farmer" subtitle="Jane Kipchoge" onLogout={() => {}} />
      <View style={styles.content}>
        <View style={styles.centerCard}>
          <View style={styles.cameraIcon}>
            <Ionicons name="camera-outline" size={38} color={colors.greenPale} />
          </View>
          <Text style={styles.title}>Ready to Verify?</Text>
          <Text style={styles.subtitle}>Tap the button below to scan a barcode</Text>
          <PrimaryButton
            label="Open Scanner"
            onPress={() => {}}
            icon={<Ionicons name="qr-code-outline" size={18} color={colors.white} />}
          />
        </View>
        <Text style={styles.manualTitle}>Or enter manually:</Text>
        <TextInput placeholder="Enter barcode number" style={styles.input} placeholderTextColor={colors.grayMedium} />
        <View style={styles.searchButton}>
          <Text style={styles.searchText}>Search</Text>
        </View>
      </View>
    </View>
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
});
