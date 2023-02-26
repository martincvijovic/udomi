import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import WelcomeScreen from './app/screens/HomeScreen';

const AuthStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName='SignIn' screenOptions={{}}>
        <AuthStack.Screen name='SignIn' component={ SignInScreen } />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
