import { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionCard } from '../components/SectionCard';
import { loadJson } from '../storage/localStorage';
import { colors } from '../theme/colors';

export function AgrovetSettingsScreen() {
  const [profile, setProfile] = useState({
    storeName: '',
    ownerName: '',
    license: '',
    location: '',
  });

  useEffect(() => {
    loadJson('signup:agrovet', profile).then(setProfile);
  }, []);

  return (
    <ScreenContainer>
      <Text style={styles.title}>Settings</Text>
      <SectionCard title="Store profile">
        <Text style={styles.bodyText}>Update business license, store details, and location.</Text>
        <Text style={styles.detailText}>Store: {profile.storeName || 'Not set'}</Text>
        <Text style={styles.detailText}>Owner: {profile.ownerName || 'Not set'}</Text>
        <Text style={styles.detailText}>License: {profile.license || 'Not set'}</Text>
        <Text style={styles.detailText}>Location: {profile.location || 'Not set'}</Text>
      </SectionCard>
      <SectionCard title="Security">
        <Text style={styles.bodyText}>Manage PIN access and device permissions.</Text>
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
  settingsCard: {
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  cardSubtitle: {
    fontSize: 12,
    color: colors.grayMuted,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingVertical: 8,
  },
  label: {
    fontSize: 12,
    color: colors.grayMuted,
  },
  value: {
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
