import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppHeader } from '../components/AppHeader';
import { colors } from '../theme/colors';

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
    <View style={styles.screen}>
      <AppHeader title="Sincy Agrovet" subtitle="Green Farm Agrovet" onLogout={() => {}} />
      <View style={styles.content}>
        <View style={styles.farmerCard}>
          <View style={styles.avatar}>
            <Ionicons name="location-outline" size={16} color={colors.green} />
          </View>
          <View style={styles.farmerBody}>
            <Text style={styles.farmerName}>Jane Kipchoge</Text>
            <Text style={styles.farmerMeta}>Nakuru · 12 verifications</Text>
          </View>
          <Ionicons name="eye-outline" size={16} color={colors.grayMuted} />
        </View>
        <View style={styles.farmerCard}>
          <View style={styles.avatar}>
            <Ionicons name="location-outline" size={16} color={colors.green} />
          </View>
          <View style={styles.farmerBody}>
            <Text style={styles.farmerName}>Samuel Kiplagat</Text>
            <Text style={styles.farmerMeta}>Eldoret · 8 verifications</Text>
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
    backgroundColor: colors.grayLight,
  },
  content: {
    padding: 16,
    gap: 12,
  },
  farmerCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.greenLight,
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
    color: colors.grayMuted,
  },
});
