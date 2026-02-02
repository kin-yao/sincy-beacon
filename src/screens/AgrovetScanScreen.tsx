import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { AppHeader } from '../components/AppHeader';
import { PrimaryButton } from '../components/PrimaryButton';
import { TopNavBar } from '../components/TopNavBar';
import { useAppTheme } from '../theme/theme';

export function AgrovetScanScreen() {
  const { colors } = useAppTheme();
  const tabs = [
    { label: 'Dashboard', route: 'Dashboard', icon: (color: string) => <Ionicons name="home-outline" size={16} color={color} /> },
    { label: 'Verify', route: 'Scan', icon: (color: string) => <Ionicons name="camera-outline" size={16} color={color} /> },
    { label: 'Inventory', route: 'Inventory', icon: (color: string) => <MaterialCommunityIcons name="cube-outline" size={16} color={color} /> },
    { label: 'Farmers', route: 'Farmers', icon: (color: string) => <Ionicons name="people-outline" size={16} color={color} /> },
    { label: 'Reports', route: 'Reports', icon: (color: string) => <Ionicons name="analytics-outline" size={16} color={color} /> },
    { label: 'Settings', route: 'Settings', icon: (color: string) => <Ionicons name="settings-outline" size={16} color={color} /> },
  ];
  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <AppHeader title="Sincy Agrovet" subtitle="Green Farm Agrovet" onLogout={() => {}} />
      <TopNavBar tabs={tabs} />
      <View style={styles.content}>
        <View style={[styles.centerCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={[styles.cameraIcon, { backgroundColor: colors.greenLight }]}>
            <Ionicons name="camera-outline" size={38} color={colors.greenPale} />
          </View>
          <Text style={[styles.title, { color: colors.text }]}>Verify Inputs</Text>
          <Text style={[styles.subtitle, { color: colors.grayMuted }]}>Scan farmer inputs to confirm authenticity.</Text>
          <PrimaryButton
            label="Open Scanner"
            onPress={() => {}}
            icon={<Ionicons name="qr-code-outline" size={18} color={colors.white} />}
          />
        </View>
        <Text style={[styles.manualTitle, { color: colors.text }]}>Or enter manually:</Text>
        <TextInput
          placeholder="Enter barcode number"
          style={[styles.input, { borderColor: colors.border, backgroundColor: colors.card, color: colors.text }]}
          placeholderTextColor={colors.grayMedium}
        />
        <View style={[styles.searchButton, { borderColor: colors.border, backgroundColor: colors.card }]}>
          <Text style={[styles.searchText, { color: colors.text }]}>Search</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    padding: 16,
    gap: 12,
  },
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
  },
  manualTitle: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  searchButton: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  searchText: {
    fontSize: 13,
    fontWeight: '600',
  },
});
