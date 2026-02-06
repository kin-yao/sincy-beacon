import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAppTheme } from '../../theme/theme';

type Action = {
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  accessibilityLabel: string;
};

type TopAppBarProps = {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  onBackPress?: () => void;
  actions?: Action[];
};

export function TopAppBar({ title, subtitle, showBack = false, onBackPress, actions = [] }: TopAppBarProps) {
  const { colors } = useAppTheme();
  const navigation = useNavigation();

  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: colors.background }}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.card,
            borderColor: colors.border,
            shadowColor: '#000',
          },
        ]}
      >
        <View style={styles.leftSection}>
          {showBack ? (
            <Pressable style={[styles.iconButton, { backgroundColor: colors.grayLight }]} onPress={onBackPress ?? (() => navigation.goBack())}>
              <Ionicons name="arrow-back" size={18} color={colors.text} />
            </Pressable>
          ) : null}
          <View>
            <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
            {subtitle ? <Text style={[styles.subtitle, { color: colors.grayMuted }]}>{subtitle}</Text> : null}
          </View>
        </View>
        <View style={styles.rightSection}>
          {actions.map((action, index) => (
            <Pressable
              key={`${action.icon}-${index}`}
              style={[styles.iconButton, { backgroundColor: colors.grayLight }]}
              onPress={action.onPress}
              accessibilityLabel={action.accessibilityLabel}
            >
              <Ionicons name={action.icon} size={18} color={colors.text} />
            </Pressable>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginVertical: 8,
    borderRadius: 14,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconButton: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 12,
    marginTop: 2,
  },
});
