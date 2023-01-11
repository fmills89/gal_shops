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

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return (
    <>
      <GroceriesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: '#cccccc'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#cccccc'},
            }}>
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
        </NavigationContainer>
      </GroceriesContextProvider>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
