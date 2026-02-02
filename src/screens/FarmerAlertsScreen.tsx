import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppHeader } from '../components/AppHeader';
import { colors } from '../theme/colors';

export function FarmerAlertsScreen() {
  const { colors } = useAppTheme();
  const tabs = [
    { label: 'Home', route: 'Home', icon: (color: string) => <Ionicons name="home-outline" size={16} color={color} /> },
    { label: 'Verify', route: 'Verify', icon: (color: string) => <Ionicons name="camera-outline" size={16} color={color} /> },
    { label: 'Products', route: 'Products', icon: (color: string) => <MaterialCommunityIcons name="cube-outline" size={16} color={color} /> },
    { label: 'Alerts', route: 'Alerts', icon: (color: string) => <Ionicons name="notifications-outline" size={16} color={color} /> },
    { label: 'Payments', route: 'Payments', icon: (color: string) => <Ionicons name="card-outline" size={16} color={color} /> },
    { label: 'Profile', route: 'Profile', icon: (color: string) => <Ionicons name="person-outline" size={16} color={color} /> },
  ];
  return (
    <View style={styles.screen}>
      <AppHeader title="Sincy Farmer" subtitle="Jane Kipchoge" onLogout={() => {}} />
      <View style={styles.content}>
        <View style={styles.alertCard}>
          <View style={styles.alertIcon}>
            <Ionicons name="warning-outline" size={18} color={colors.danger} />
          </View>
          <View style={styles.alertBody}>
            <Text style={styles.alertTitle}>Counterfeit warning nearby</Text>
            <Text style={styles.alertText}>Hybrid maize seeds flagged in Nakuru East.</Text>
          </View>
        </View>
        <View style={styles.alertCard}>
          <View style={styles.alertIcon}>
            <Ionicons name="cloud-done-outline" size={18} color={colors.green} />
          </View>
          <View style={styles.alertBody}>
            <Text style={styles.alertTitle}>Offline cache updated</Text>
            <Text style={styles.alertText}>Last sync completed 2 hours ago.</Text>
          </View>
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
  alertCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  alertIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.grayLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertBody: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 13,
    fontWeight: '700',
  },
  alertText: {
    fontSize: 11,
    color: colors.grayMuted,
  },
});
