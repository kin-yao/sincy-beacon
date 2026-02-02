import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useAppTheme } from '../theme/theme';

type AppHeaderProps = {
  title: string;
  subtitle?: string;
  onLogout?: () => void;
};

export function AppHeader({ title, subtitle, onLogout }: AppHeaderProps) {
  const { colors, isDark, toggleTheme } = useAppTheme();

  return (
    <SafeAreaView edges={['top']} style={[styles.safeArea, { backgroundColor: colors.card }]}>
      <View style={[styles.container, { backgroundColor: colors.card, borderBottomColor: colors.border }]}>
        <View>
          <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
          {subtitle ? <Text style={[styles.subtitle, { color: colors.grayMuted }]}>{subtitle}</Text> : null}
        </View>
        <View style={styles.actions}>
          <Pressable style={[styles.iconButton, { backgroundColor: colors.grayLight }]} onPress={toggleTheme}>
            <Ionicons name={isDark ? 'sunny-outline' : 'moon-outline'} size={18} color={colors.text} />
          </Pressable>
          {onLogout ? (
            <Pressable
              style={[styles.iconButton, { backgroundColor: colors.grayLight }]}
              onPress={onLogout}
              accessibilityRole="button"
            >
              <Ionicons name="log-out-outline" size={18} color={colors.text} />
            </Pressable>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'transparent',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 12,
    marginTop: 2,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    padding: 6,
    borderRadius: 12,
  },
});
