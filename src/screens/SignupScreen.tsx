import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionCard } from '../components/SectionCard';
import { colors } from '../theme/colors';

type SignupScreenProps = {
  role: 'farmer' | 'agrovet';
  onContinue: () => void;
};

export function SignupScreen({ role, onContinue }: SignupScreenProps) {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Create your {role} profile</Text>
      {role === 'farmer' ? (
        <>
          <SectionCard title="Farmer registration">
            <Text style={styles.bodyText}>Capture National ID, phone number, and select SACCO.</Text>
          </SectionCard>
          <SectionCard title="Verification">
            <Text style={styles.bodyText}>Scan a sample barcode to verify the local cache is ready.</Text>
          </SectionCard>
          <SectionCard title="Finish setup">
            <Text style={styles.bodyText}>Complete onboarding to start verifying products.</Text>
            <Text style={styles.link} onPress={onContinue}>
              Continue to dashboard
            </Text>
          </SectionCard>
        </>
      ) : (
        <>
          <SectionCard title="Agrovet onboarding">
            <Text style={styles.bodyText}>Provide store name, business license, and location.</Text>
          </SectionCard>
          <SectionCard title="Inventory setup">
            <Text style={styles.bodyText}>Sync inventory batches for instant authenticity checks.</Text>
          </SectionCard>
          <SectionCard title="Finish setup">
            <Text style={styles.bodyText}>Invite your first farmer once onboarding is complete.</Text>
            <Text style={styles.link} onPress={onContinue}>
              Continue to dashboard
            </Text>
          </SectionCard>
        </>
      )}
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
  link: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: colors.green,
  },
});
