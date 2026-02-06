import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { AgrovetDashboardScreen } from '../screens/AgrovetDashboardScreen';
import { AgrovetFarmersScreen } from '../screens/AgrovetFarmersScreen';
import { AgrovetInventoryScreen } from '../screens/AgrovetInventoryScreen';
import { AgrovetReportsScreen } from '../screens/AgrovetReportsScreen';
import { AgrovetScanScreen } from '../screens/AgrovetScanScreen';
import { AgrovetSettingsScreen } from '../screens/AgrovetSettingsScreen';
import { useAppTheme } from '../theme/theme';

export type AgrovetTabParamList = {
  Dashboard: undefined;
  Scan: undefined;
  Inventory: undefined;
  Farmers: undefined;
  Reports: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<AgrovetTabParamList>();

export function AgrovetTabs() {
  const { colors } = useAppTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: colors.grayMedium,
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: colors.border,
          height: 64,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontSize: 10,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={AgrovetDashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Scan"
        component={AgrovetScanScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="camera-outline" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={AgrovetInventoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="cube-outline" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Farmers"
        component={AgrovetFarmersScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="people-outline" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Reports"
        component={AgrovetReportsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="analytics-outline" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={AgrovetSettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="settings-outline" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
