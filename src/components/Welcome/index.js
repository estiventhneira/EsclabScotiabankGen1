/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const index = ({nombre}) => {
  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        marginVertical: 20,
      }}>
      <Text style={{fontSize: 25}}>¡Bienvenido a nuestra App !</Text>
      <Text style={{fontSize: 23}}>{nombre ? nombre : 'Sin nombre'}</Text>
    </View>
  );
};

export default index;
