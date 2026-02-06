import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { FarmerAlertsScreen } from '../screens/FarmerAlertsScreen';
import { FarmerHomeScreen } from '../screens/FarmerHomeScreen';
import { FarmerPaymentsScreen } from '../screens/FarmerPaymentsScreen';
import { FarmerProductsScreen } from '../screens/FarmerProductsScreen';
import { FarmerProfileScreen } from '../screens/FarmerProfileScreen';
import { FarmerVerifyScreen } from '../screens/FarmerVerifyScreen';
import { useAppTheme } from '../theme/theme';

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
  const { colors } = useAppTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
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
        name="Home"
        component={FarmerHomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Verify"
        component={FarmerVerifyScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="camera-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={FarmerProductsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cube-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Alerts"
        component={FarmerAlertsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Payments"
        component={FarmerPaymentsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="card-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={FarmerProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
