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
        <View style={[styles.logoBadge, { backgroundColor: colors.greenPale }]}>
          <Ionicons name="flash-outline" size={28} color={colors.greenDark} />
        </View>

        <Text style={[styles.title, { color: colors.text }]}>Sincy</Text>
        <Text style={[styles.subtitle, { color: colors.grayMuted }]}>
          Verify authentic agricultural inputs
        </Text>
      </View>

      <View
        style={[
          styles.card,
          {
            backgroundColor: colors.card,
            borderColor: colors.border,
            shadowColor: colors.grayDark,
          },
        ]}
      >
        <PrimaryButton
          label="I'm a Farmer"
          onPress={() => onSelectRole('farmer')}
          icon={<MaterialCommunityIcons name="sprout" size={18} color={colors.white} />}
        />
        <PrimaryButton
          label="I'm an Agrovet"
          onPress={() => onSelectRole('agrovet')}
          variant="outline"
          icon={<Ionicons name="storefront-outline" size={18} color={colors.green} />}
        />
      </View>

      <View style={[styles.callout, { backgroundColor: colors.greenPale, borderColor: colors.green }]}>
        <Text style={[styles.calloutText, { color: colors.text }]}>
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
    gap: 18,
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
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
  },
  card: {
    padding: 18,
    borderRadius: 18,
    borderWidth: 1,
    gap: 12,
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  callout: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
  },
  calloutText: {
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
  },
  calloutEm: {
    fontWeight: '700',
  },
});
