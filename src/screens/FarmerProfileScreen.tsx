import { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionCard } from '../components/SectionCard';
import { loadJson } from '../storage/localStorage';
import { colors } from '../theme/colors';

export function FarmerProfileScreen() {
  const [profile, setProfile] = useState({ name: '', nid: '', phone: '', sacco: '' });

  useEffect(() => {
    loadJson('signup:farmer', profile).then(setProfile);
  }, []);

  return (
    <ScreenContainer>
      <Text style={styles.title}>Profile</Text>
      <SectionCard title="Farmer details">
        <Text style={styles.bodyText}>National ID, phone, and SACCO membership information.</Text>
        <Text style={styles.detailText}>Name: {profile.name || 'Not set'}</Text>
        <Text style={styles.detailText}>National ID: {profile.nid || 'Not set'}</Text>
        <Text style={styles.detailText}>Phone: {profile.phone || 'Not set'}</Text>
        <Text style={styles.detailText}>SACCO: {profile.sacco || 'Not set'}</Text>
      </SectionCard>
      <SectionCard title="Security">
        <Text style={styles.bodyText}>Change PIN and manage device access.</Text>
      </SectionCard>
    </ScreenContainer>
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
  detailText: {
    fontSize: 13,
    color: colors.grayDark,
    marginTop: 6,
  },
});
