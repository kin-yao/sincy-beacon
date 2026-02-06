import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useAppTheme } from '../theme/theme';

type ScreenContainerProps = {
  children: React.ReactNode;
};

export function ScreenContainer({ children }: ScreenContainerProps) {
  const { colors } = useAppTheme();
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.inner}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  inner: {
    flex: 1,
    gap: 16,
  },
});
