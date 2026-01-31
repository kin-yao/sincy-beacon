import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AgrovetDashboardScreen } from '../screens/AgrovetDashboardScreen';
import { AgrovetFarmersScreen } from '../screens/AgrovetFarmersScreen';
import { AgrovetInventoryScreen } from '../screens/AgrovetInventoryScreen';
import { AgrovetReportsScreen } from '../screens/AgrovetReportsScreen';
import { AgrovetScanScreen } from '../screens/AgrovetScanScreen';
import { AgrovetSettingsScreen } from '../screens/AgrovetSettingsScreen';
import { colors } from '../theme/colors';

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
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: colors.grayMedium,
      }}
    >
      <Tab.Screen name="Dashboard" component={AgrovetDashboardScreen} />
      <Tab.Screen name="Scan" component={AgrovetScanScreen} />
      <Tab.Screen name="Inventory" component={AgrovetInventoryScreen} />
      <Tab.Screen name="Farmers" component={AgrovetFarmersScreen} />
      <Tab.Screen name="Reports" component={AgrovetReportsScreen} />
      <Tab.Screen name="Settings" component={AgrovetSettingsScreen} />
    </Tab.Navigator>
  );
}
