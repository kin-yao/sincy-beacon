import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionCard } from '../components/SectionCard';
import { TextField } from '../components/TextField';
import { loadJson, saveJson } from '../storage/localStorage';
import { colors } from '../theme/colors';

type SignupScreenProps = {
  role: 'farmer' | 'agrovet';
  onContinue: () => void;
};

export function SignupScreen({ role, onContinue }: SignupScreenProps) {
  const [status, setStatus] = useState('Ready');
  const [farmerForm, setFarmerForm] = useState({
    name: '',
    nid: '',
    phone: '',
    sacco: '',
  });
  const [agrovetForm, setAgrovetForm] = useState({
    storeName: '',
    ownerName: '',
    license: '',
    location: '',
  });

  useEffect(() => {
    loadJson<typeof farmerForm>('signup:farmer', farmerForm).then(setFarmerForm);
    loadJson<typeof agrovetForm>('signup:agrovet', agrovetForm).then(setAgrovetForm);
  }, []);

  const handleSave = async () => {
    setStatus('Saving...');
    if (role === 'farmer') {
      await saveJson('signup:farmer', farmerForm);
    } else {
      await saveJson('signup:agrovet', agrovetForm);
    }
    setStatus('Saved on device');
  };

  return (
    <ScreenContainer>
      <Text style={styles.title}>Create your {role} profile</Text>
      {role === 'farmer' ? (
        <>
          <SectionCard title="Farmer registration">
            <Text style={styles.bodyText}>Capture National ID, phone number, and select SACCO.</Text>
            <View style={styles.form}>
              <TextField
                label="Full name"
                value={farmerForm.name}
                onChangeText={(value) => setFarmerForm((prev) => ({ ...prev, name: value }))}
              />
              <TextField
                label="National ID"
                value={farmerForm.nid}
                onChangeText={(value) => setFarmerForm((prev) => ({ ...prev, nid: value }))}
                keyboardType="numeric"
              />
              <TextField
                label="Phone number"
                value={farmerForm.phone}
                onChangeText={(value) => setFarmerForm((prev) => ({ ...prev, phone: value }))}
                keyboardType="phone-pad"
              />
              <TextField
                label="SACCO"
                value={farmerForm.sacco}
                onChangeText={(value) => setFarmerForm((prev) => ({ ...prev, sacco: value }))}
              />
            </View>
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
            <View style={styles.form}>
              <TextField
                label="Store name"
                value={agrovetForm.storeName}
                onChangeText={(value) => setAgrovetForm((prev) => ({ ...prev, storeName: value }))}
              />
              <TextField
                label="Owner name"
                value={agrovetForm.ownerName}
                onChangeText={(value) => setAgrovetForm((prev) => ({ ...prev, ownerName: value }))}
              />
              <TextField
                label="Business license"
                value={agrovetForm.license}
                onChangeText={(value) => setAgrovetForm((prev) => ({ ...prev, license: value }))}
              />
              <TextField
                label="Location"
                value={agrovetForm.location}
                onChangeText={(value) => setAgrovetForm((prev) => ({ ...prev, location: value }))}
              />
            </View>
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
      <SectionCard title="Save offline">
        <Text style={styles.bodyText}>Store this information securely on your device for offline onboarding.</Text>
        <PrimaryButton label="Save profile data" onPress={handleSave} />
        <Text style={styles.statusText}>{status}</Text>
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
  form: {
    marginTop: 12,
  },
  statusText: {
    marginTop: 8,
    color: colors.greenDark,
    fontSize: 13,
  },
  link: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: colors.green,
  },
});
