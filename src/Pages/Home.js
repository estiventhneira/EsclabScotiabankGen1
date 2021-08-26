/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Image,
} from 'react-native';

const Home = ({navigation}) => {
  const heigth = useWindowDimensions().height;

  return (
    <View style={{backgroundColor: 'black', minHeight: heigth}}>
      <View>
        <Text
          style={{
            color: 'white',
            fontSize: 33,
            fontWeight: '700',
            textAlign: 'center',
            marginTop: 25,
          }}>
          Rick And Morty App
        </Text>
        <Image
          style={{height: 250, marginTop: 30, marginHorizontal: 20}}
          source={{
            uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-y-morty-pistola-portales-1626540387.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*',
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 15,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductPage')}
          style={{
            backgroundColor: 'white',
            width: 130,
            padding: 10,
            margin: 15,
            borderRadius: 5,
          }}>
          <Text style={{textAlign: 'center'}}>Ver personajes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Success')}
          style={{
            backgroundColor: 'white',
            width: 130,
            padding: 10,
            margin: 15,
            borderRadius: 5,
          }}>
          <Text style={{textAlign: 'center'}}>Ir a carrito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
