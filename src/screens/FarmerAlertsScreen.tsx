import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { AppHeader } from '../components/AppHeader';
import { TopNavBar } from '../components/TopNavBar';
import { useAppTheme } from '../theme/theme';

export function FarmerAlertsScreen() {
  const { colors } = useAppTheme();

  const tabs = [
    { label: 'Home', route: 'Home', icon: (c: string) => <Ionicons name="home-outline" size={16} color={c} /> },
    { label: 'Verify', route: 'Verify', icon: (c: string) => <Ionicons name="camera-outline" size={16} color={c} /> },
    { label: 'Products', route: 'Products', icon: (c: string) => <MaterialCommunityIcons name="cube-outline" size={16} color={c} /> },
    { label: 'Alerts', route: 'Alerts', icon: (c: string) => <Ionicons name="notifications-outline" size={16} color={c} /> },
    { label: 'Payments', route: 'Payments', icon: (c: string) => <Ionicons name="card-outline" size={16} color={c} /> },
    { label: 'Profile', route: 'Profile', icon: (c: string) => <Ionicons name="person-outline" size={16} color={c} /> },
  ];

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <AppHeader title="Sincy Farmer" subtitle="Jane Kipchoge" onLogout={() => {}} />
      <TopNavBar tabs={tabs} />

      <View style={styles.content}>
        <View style={[styles.alertCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={[styles.alertIcon, { backgroundColor: colors.grayLight }]}>
            <Ionicons name="warning-outline" size={18} color={colors.danger} />
          </View>
          <View style={styles.alertBody}>
            <Text style={[styles.alertTitle, { color: colors.text }]}>Counterfeit warning nearby</Text>
            <Text style={[styles.alertText, { color: colors.grayMuted }]}>
              Hybrid maize seeds flagged in Nakuru East.
            </Text>
          </View>
        </View>

        <View style={[styles.alertCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={[styles.alertIcon, { backgroundColor: colors.grayLight }]}>
            <Ionicons name="cloud-done-outline" size={18} color={colors.green} />
          </View>
          <View style={styles.alertBody}>
            <Text style={[styles.alertTitle, { color: colors.text }]}>Offline cache updated</Text>
            <Text style={[styles.alertText, { color: colors.grayMuted }]}>
              Last sync completed 2 hours ago.
            </Text>
          </View>
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
  alertCard: {
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  alertIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
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
  },
});
