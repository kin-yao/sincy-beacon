import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppHeader } from '../components/AppHeader';
import { PrimaryButton } from '../components/PrimaryButton';
import { colors } from '../theme/colors';

export function FarmerProfileScreen() {
  return (
    <View style={styles.screen}>
      <AppHeader title="Sincy Farmer" subtitle="Jane Kipchoge" onLogout={() => {}} />
      <View style={styles.content}>
        <View style={styles.profileCard}>
          <Text style={styles.profileTitle}>Sincy Farmer</Text>
          <Text style={styles.profileSubtitle}>Kagema SACCO Member</Text>
          <View style={styles.profileRow}>
            <Text style={styles.profileLabel}>Location</Text>
            <Text style={styles.profileValue}>Nakuru Town</Text>
          </View>
          <View style={styles.profileRow}>
            <Text style={styles.profileLabel}>National ID</Text>
            <Text style={styles.profileValue}>12345678</Text>
          </View>
          <View style={styles.profileRow}>
            <Text style={styles.profileLabel}>Language</Text>
            <Text style={styles.profileValue}>English</Text>
          </View>
          <PrimaryButton label="Logout" onPress={() => {}} variant="outline" />
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
  },
  profileCard: {
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 12,
  },
  profileTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.grayDark,
  },
  profileSubtitle: {
    fontSize: 12,
    color: colors.grayMuted,
  },
  profileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingVertical: 8,
  },
  profileLabel: {
    fontSize: 12,
    color: colors.grayMuted,
  },
  profileValue: {
    fontSize: 12,
    color: colors.grayDark,
    fontWeight: '600',
  },
});
