import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { colors } from '../theme/colors';

type RoleSelectScreenProps = {
  onSelectRole: (role: 'farmer' | 'agrovet') => void;
};

export function RoleSelectScreen({ onSelectRole }: RoleSelectScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Sincy</Text>
        <Text style={styles.subtitle}>Verify genuine agricultural inputs in seconds.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Choose your role</Text>
        <PrimaryButton label="I am a Farmer" onPress={() => onSelectRole('farmer')} />
        <PrimaryButton label="I am an Agrovet/Retailer" onPress={() => onSelectRole('agrovet')} />
      </View>
      <Text style={styles.footer}>Offline-first verification • Secure SACCO payments</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayLight,
    padding: 24,
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.greenDark,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.grayDark,
  },
  card: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: colors.grayDark,
  },
  footer: {
    textAlign: 'center',
    color: colors.grayDark,
  },
});
