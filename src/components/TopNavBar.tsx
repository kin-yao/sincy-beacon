import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAppTheme } from '../theme/theme';

type TabItem = {
  label: string;
  route: string;
  icon: (color: string) => React.ReactNode;
};

type TopNavBarProps = {
  tabs: TabItem[];
};

export function TopNavBar({ tabs }: TopNavBarProps) {
  const navigation = useNavigation();
  const route = useRoute();
  const { colors } = useAppTheme();

  return (
    <View style={[styles.wrapper, { backgroundColor: colors.card, borderBottomColor: colors.border }]}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.content}>
        {tabs.map((tab) => {
          const isActive = route.name === tab.route;
          return (
            <Pressable
              key={tab.route}
              onPress={() => navigation.navigate(tab.route as never)}
              style={[
                styles.tab,
                {
                  backgroundColor: isActive ? colors.greenLight : colors.card,
                  borderColor: isActive ? colors.green : colors.border,
                },
              ]}
            >
              {tab.icon(isActive ? colors.green : colors.grayMuted)}
              <Text style={[styles.label, { color: isActive ? colors.green : colors.grayMuted }]}>
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 1,
  },
  content: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
  },
});
