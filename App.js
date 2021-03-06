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
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import CarritoProvider from './src/Context/CarritoContext';

import Home from './src/Pages/Home';
import ProductPage from './src/Pages/ProductPage';
import ProductDetail from './src/Pages/ProductDetail';
import Success from './src/Pages/Success';
import AddCharacter from './src/Pages/AddCharacter';

const Stack = createNativeStackNavigator();
const usuarioLogin = true;

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <CarritoProvider>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={usuarioLogin ? 'Home' : 'Login'}>
            <Stack.Screen name="Home" component={Home} personaje={true} />
            <Stack.Screen name="Login" component={Home} personaje={true} />
            <Stack.Screen name="ProductPage" component={ProductPage} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
            <Stack.Screen name="Success" component={Success} />
            <Stack.Screen name="AddCharacter" component={AddCharacter} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </CarritoProvider>
  );
};

export default App;
