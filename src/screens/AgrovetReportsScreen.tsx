import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { AppHeader } from '../components/AppHeader';
import { TopNavBar } from '../components/TopNavBar';
import { useAppTheme } from '../theme/theme';

export function AgrovetReportsScreen() {
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
        <View style={[styles.reportCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={[styles.reportIcon, { backgroundColor: colors.greenLight }]}>
            <Ionicons name="bar-chart-outline" size={18} color={colors.green} />
          </View>
          <View>
            <Text style={[styles.reportTitle, { color: colors.text }]}>Verification Analytics</Text>
            <Text style={[styles.reportMeta, { color: colors.grayMuted }]}>Track genuine vs counterfeit attempts.</Text>
          </View>
        </View>
        <View style={[styles.reportCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={[styles.reportIcon, { backgroundColor: colors.greenLight }]}>
            <Ionicons name="document-text-outline" size={18} color={colors.green} />
          </View>
          <View>
            <Text style={[styles.reportTitle, { color: colors.text }]}>Sales Reports</Text>
            <Text style={[styles.reportMeta, { color: colors.grayMuted }]}>Export daily and monthly summaries.</Text>
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
  reportCard: {
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  reportIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reportTitle: {
    fontSize: 13,
    fontWeight: '700',
  },
  reportMeta: {
    fontSize: 11,
  },
});
