import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

type AppHeaderProps = {
  title: string;
  subtitle?: string;
  onLogout?: () => void;
};

export function AppHeader({ title, subtitle, onLogout }: AppHeaderProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      {onLogout ? (
        <Pressable style={styles.logout} onPress={onLogout} accessibilityRole="button">
          <Ionicons name="log-out-outline" size={20} color={colors.grayDark} />
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 10,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.grayDark,
  },
  subtitle: {
    fontSize: 12,
    color: colors.grayMuted,
    marginTop: 2,
  },
  logout: {
    padding: 6,
    borderRadius: 12,
    backgroundColor: colors.grayLight,
  },
});
