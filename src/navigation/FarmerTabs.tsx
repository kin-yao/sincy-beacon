import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FarmerAlertsScreen } from '../screens/FarmerAlertsScreen';
import { FarmerHomeScreen } from '../screens/FarmerHomeScreen';
import { FarmerPaymentsScreen } from '../screens/FarmerPaymentsScreen';
import { FarmerProductsScreen } from '../screens/FarmerProductsScreen';
import { FarmerProfileScreen } from '../screens/FarmerProfileScreen';
import { FarmerVerifyScreen } from '../screens/FarmerVerifyScreen';
import { colors } from '../theme/colors';

export type FarmerTabParamList = {
  Home: undefined;
  Verify: undefined;
  Products: undefined;
  Alerts: undefined;
  Payments: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<FarmerTabParamList>();

export function FarmerTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: colors.grayMedium,
      }}
    >
      <Tab.Screen name="Home" component={FarmerHomeScreen} />
      <Tab.Screen name="Verify" component={FarmerVerifyScreen} />
      <Tab.Screen name="Products" component={FarmerProductsScreen} />
      <Tab.Screen name="Alerts" component={FarmerAlertsScreen} />
      <Tab.Screen name="Payments" component={FarmerPaymentsScreen} />
      <Tab.Screen name="Profile" component={FarmerProfileScreen} />
    </Tab.Navigator>
  );
}
