/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {createContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import Home from './src/Pages/Home';
import ProductPage from './src/Pages/ProductPage';
import ProductDetail from './src/Pages/ProductDetail';
import Success from './src/Pages/Success';

const Stack = createNativeStackNavigator();

const usuarioLogin = true;

export const Context = createContext({favoritos: [], setFavoritos: () => {}});

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  const [favoritos, setFavoritos] = useState([]);

  return (
    <Context.Provider value={{favoritos, setFavoritos}}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={usuarioLogin ? 'Home' : 'Login'}>
            <Stack.Screen name="Home" component={Home} personaje={true} />
            <Stack.Screen name="Login" component={Home} personaje={true} />
            <Stack.Screen name="ProductPage" component={ProductPage} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
            <Stack.Screen name="Success" component={Success} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </Context.Provider>
  );
};

export default App;
