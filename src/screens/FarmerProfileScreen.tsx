import React, { useEffect, useState } from 'react';
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

import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionCard } from '../components/SectionCard';
import { colors } from '../theme/colors';

export function FarmerProfileScreen() {
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
