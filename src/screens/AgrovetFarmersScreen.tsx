import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { AppHeader } from '../components/AppHeader';
import { TopNavBar } from '../components/TopNavBar';
import { useAppTheme } from '../theme/theme';

export function AgrovetFarmersScreen() {
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
        <View style={[styles.farmerCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={[styles.avatar, { backgroundColor: colors.greenLight }]}>
            <Ionicons name="location-outline" size={16} color={colors.green} />
          </View>
          <View style={styles.farmerBody}>
            <Text style={[styles.farmerName, { color: colors.text }]}>Jane Kipchoge</Text>
            <Text style={[styles.farmerMeta, { color: colors.grayMuted }]}>Nakuru · 12 verifications</Text>
          </View>
          <Ionicons name="eye-outline" size={16} color={colors.grayMuted} />
        </View>
        <View style={[styles.farmerCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={[styles.avatar, { backgroundColor: colors.greenLight }]}>
            <Ionicons name="location-outline" size={16} color={colors.green} />
          </View>
          <View style={styles.farmerBody}>
            <Text style={[styles.farmerName, { color: colors.text }]}>Samuel Kiplagat</Text>
            <Text style={[styles.farmerMeta, { color: colors.grayMuted }]}>Eldoret · 8 verifications</Text>
          </View>
          <Ionicons name="eye-outline" size={16} color={colors.grayMuted} />
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
  farmerCard: {
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  farmerBody: {
    flex: 1,
  },
  farmerName: {
    fontSize: 13,
    fontWeight: '700',
  },
  farmerMeta: {
    fontSize: 11,
  },
});
