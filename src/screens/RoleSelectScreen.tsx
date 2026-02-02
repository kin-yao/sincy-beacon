import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { PrimaryButton } from '../components/PrimaryButton';
import { useAppTheme } from '../theme/theme';

type RoleSelectScreenProps = {
  onSelectRole: (role: 'farmer' | 'agrovet') => void;
};

export function RoleSelectScreen({ onSelectRole }: RoleSelectScreenProps) {
  const { colors } = useAppTheme();
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <View style={styles.logoBadge}>
          <Ionicons name="flash-outline" size={28} color={colors.greenDark} />
        </View>
        <Text style={styles.title}>Sincy</Text>
        <Text style={styles.subtitle}>Verify authentic agricultural inputs</Text>
      </View>
      <View style={styles.card}>
        <PrimaryButton
          label="I'm a Farmer"
          onPress={() => onSelectRole('farmer')}
          icon={<MaterialCommunityIcons name="cube-outline" size={18} color={colors.white} />}
        />
        <PrimaryButton
          label="I'm an Agrovet"
          onPress={() => onSelectRole('agrovet')}
          variant="outline"
          icon={<Ionicons name="storefront-outline" size={18} color={colors.green} />}
        />
      </View>
      <View style={styles.callout}>
        <Text style={styles.calloutText}>
          <Text style={styles.calloutEm}>How it works:</Text> Scan barcodes to verify authenticity and
          build trust in your supply chain.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    gap: 24,
  },
  header: {
    alignItems: 'center',
    gap: 10,
  },
  logoBadge: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.greenPale,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.grayDark,
  },
  subtitle: {
    fontSize: 13,
    color: colors.grayMuted,
  },
  card: {
    backgroundColor: colors.white,
    padding: 18,
    borderRadius: 18,
    shadowColor: colors.grayDark,
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  callout: {
    backgroundColor: colors.redLight,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F2B8BD',
  },
  calloutText: {
    fontSize: 12,
    color: colors.grayDark,
    textAlign: 'center',
  },
  calloutEm: {
    fontWeight: '700',
  },
});
