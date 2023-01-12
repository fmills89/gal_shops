import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CategoriesScreen from './screens/CategoriesScreen';
import GroceriesContextProvider from './store/groceries-context';
import CategoryDetailsScreen from './screens/CategoryDetailsScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import {GlobalStyles} from './constants/styles';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: GlobalStyles.colors.accent500},
        headerTintColor: 'white',
        contentStyle: {backgroundColor: GlobalStyles.colors.accent500},
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: GlobalStyles.colors.accent500},
        headerTintColor: 'white',
        contentStyle: {backgroundColor: '#cccccc'},
      }}>
      {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{title: 'Grocery Tiles'}}
      />
      <Stack.Screen
        name="CategoryDetailsScreen"
        component={CategoryDetailsScreen}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
const App = () => {
  return (
    <>
      <Navigation />
    </>
  );
};

export default App;
