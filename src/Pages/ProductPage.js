/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
const axios = require('axios').default;

const ProductPage = ({navigation}) => {
  const [character, setCharacter] = useState('estoy vacio');

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/?page=1')
      .then(response => setCharacter(response.data));
  }, []);

  const CarritoDeCompra = [
    {
      itemName: 'Camisa',
      size: 14,
      color: 'Black',
      id: 1231231234,
      url: 'https://http2.mlstatic.com/D_NQ_NP_924043-MCO31047123874_062019-O.webp',
    },
    {
      itemName: 'Pantalon',
      size: 34,
      color: 'Blue',
      id: 214135233,
      url: 'https://http2.mlstatic.com/D_NQ_NP_611294-MCO31007293103_062019-O.webp',
    },
  ];

  console.log(character);

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Success', {CarritoDeCompra})}
        style={{
          backgroundColor: 'black',
          width: 130,
          padding: 10,
          margin: 15,
          borderRadius: 5,
        }}>
        <Text style={{color: 'white'}}>Ir a pagar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: 'black',
          width: 130,
          padding: 10,
          margin: 15,
          borderRadius: 5,
        }}>
        <Text style={{color: 'white'}}>Ir Atrás</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductPage;
