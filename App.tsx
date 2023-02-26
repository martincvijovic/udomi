import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ScreenId } from './app/config/constants';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';

const AuthStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName={ ScreenId.Login }>
        <AuthStack.Screen name={ ScreenId.Login } component={ LoginScreen } />
        <AuthStack.Screen name={ ScreenId.Register } component={ RegisterScreen } />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
