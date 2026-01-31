import React, { useEffect, useState } from 'react';
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

import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionCard } from '../components/SectionCard';
import { colors } from '../theme/colors';

export function AgrovetSettingsScreen() {
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
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.grayDark,
  },
  bodyText: {
    fontSize: 14,
    color: colors.grayDark,
  },
  detailText: {
    fontSize: 13,
    color: colors.grayDark,
    marginTop: 6,
  },
});
