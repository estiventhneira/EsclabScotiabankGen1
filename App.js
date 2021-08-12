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
import {Text} from 'react-native';

import Home from './src/Pages/Home';
import ProductPage from './src/Pages/ProductPage';
import ProductDetail from './src/Pages/ProductDetail';
import Success from './src/Pages/Success';

const Stack = createNativeStackNavigator();

const usuarioLogin = true;
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={usuarioLogin ? 'Home' : 'Login'}>
        <Stack.Screen name="Home" component={Home} personaje={true} />
        <Stack.Screen name="Login" component={Home} personaje={true} />
        <Stack.Screen name="ProductPage" component={ProductPage} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Success" component={Success} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
