import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthChoiceScreen } from './src/screens/AuthChoiceScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { RoleSelectScreen } from './src/screens/RoleSelectScreen';
import { SignupScreen } from './src/screens/SignupScreen';
import { AgrovetTabs } from './src/navigation/AgrovetTabs';
import { FarmerTabs } from './src/navigation/FarmerTabs';

export type RootStackParamList = {
  RoleSelect: undefined;
  AuthChoice: { role: 'farmer' | 'agrovet' };
  Login: { role: 'farmer' | 'agrovet' };
  Signup: { role: 'farmer' | 'agrovet' };
  FarmerTabs: undefined;
  AgrovetTabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="RoleSelect">
          {(props) => (
            <RoleSelectScreen
              onSelectRole={(role) => props.navigation.navigate('AuthChoice', { role })}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="AuthChoice">
          {(props) => (
            <AuthChoiceScreen
              role={props.route.params.role}
              onLogin={() => props.navigation.navigate('Login', { role: props.route.params.role })}
              onSignup={() => props.navigation.navigate('Signup', { role: props.route.params.role })}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Login">
          {(props) => (
            <LoginScreen
              role={props.route.params.role}
              onContinue={() =>
                props.navigation.replace(props.route.params.role === 'farmer' ? 'FarmerTabs' : 'AgrovetTabs')
              }
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Signup">
          {(props) => (
            <SignupScreen
              role={props.route.params.role}
              onContinue={() =>
                props.navigation.replace(props.route.params.role === 'farmer' ? 'FarmerTabs' : 'AgrovetTabs')
              }
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="FarmerTabs" component={FarmerTabs} />
        <Stack.Screen name="AgrovetTabs" component={AgrovetTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
