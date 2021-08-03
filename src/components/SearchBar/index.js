/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput} from 'react-native';

const index = ({setUrl}) => {
  return (
    <View
      style={{
        backgroundColor: '#e28743',
        height: 50,
        width: '100%',
        alignItems: 'center',
      }}>
      <TextInput
        onChangeText={text => setUrl(text)}
        placeholder={'Ingresa la URL que deseas ver'}
        style={{
          width: 250,
          borderRadius: 12,
          margin: 10,
          padding: 4,
          paddingHorizontal: 12,
          height: 30,
          backgroundColor: 'white',
        }}
      />
    </View>
  );
};

export default index;
