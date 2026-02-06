import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useAppTheme } from '../../theme/theme';

type ListItemCardProps = {
  title: string;
  subtitle: string;
  tag?: string;
  status?: string;
  onPress?: () => void;
};

export function ListItemCard({ title, subtitle, tag, status, onPress }: ListItemCardProps) {
  const { colors } = useAppTheme();

  return (
    <Pressable
      onPress={onPress}
      style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}
    >
      <View style={styles.row}>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        {status ? (
          <View style={[styles.chip, { backgroundColor: colors.greenLight }]}>
            <Text style={[styles.chipText, { color: colors.green }]}>{status}</Text>
          </View>
        ) : null}
      </View>
      <Text style={[styles.subtitle, { color: colors.grayMuted }]}>{subtitle}</Text>
      {tag ? <Text style={[styles.tag, { color: colors.grayMedium }]}>{tag}</Text> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    gap: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    flex: 1,
  },
  subtitle: {
    fontSize: 13,
  },
  tag: {
    fontSize: 11,
  },
  chip: {
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  chipText: {
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});
