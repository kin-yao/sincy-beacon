import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../theme/colors';

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'outline';
};

export function PrimaryButton({ label, onPress, variant = 'primary' }: PrimaryButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        variant === 'primary' ? styles.primary : styles.outline,
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.label, variant === 'primary' ? styles.labelPrimary : styles.labelOutline]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
  },
  primary: {
    backgroundColor: colors.green,
  },
  outline: {
    borderWidth: 2,
    borderColor: colors.green,
    backgroundColor: colors.white,
  },
  pressed: {
    opacity: 0.8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  labelPrimary: {
    color: colors.white,
  },
  labelOutline: {
    color: colors.green,
  },
});
