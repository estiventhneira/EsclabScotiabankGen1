/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
const axios = require('axios').default;

const ProductPage = ({navigation}) => {
  const [character, setCharacter] = useState('');
  const [favoritos, setFavoritos] = useState([]);

  console.log(favoritos);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/?page=1')
      .then(response => setCharacter(response.data));
  }, []);

  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      <View style={{margin: 20, alignItems: 'center'}}>
        {console.log(character)}
        {character.results !== undefined ? (
          character.results.map((item, index) => {
            return (
              <TouchableOpacity
                style={{marginVertical: 15}}
                onPress={() => navigation.navigate('ProductDetail', {item})}>
                <Image
                  source={{uri: `${item.image}`}}
                  style={{height: 250, width: 250}}
                />
                <Text
                  style={{
                    marginVertical: 5,
                    fontWeight: '700',
                    fontSize: 20,
                    color: 'white',
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    marginVertical: 5,
                    fontWeight: '700',
                    fontSize: 20,
                    color: 'white',
                  }}>
                  Status: {item.status}
                </Text>
                <Text
                  style={{
                    marginVertical: 5,
                    fontWeight: '700',
                    fontSize: 20,
                    color: 'white',
                  }}>
                  Genero: {item.gender}
                </Text>
                <Text
                  style={{
                    marginVertical: 5,
                    fontWeight: '700',
                    fontSize: 20,
                    color: 'white',
                  }}>
                  Especie: {item.species}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() =>
                      setFavoritos(favoritos => [...favoritos, item.id])
                    }
                    style={{
                      backgroundColor: '#97ce4c',
                      width: '40%',
                      margin: 5,
                      marginLeft: 0,
                      padding: 9,
                      borderRadius: 5,
                    }}>
                    <Text style={{color: 'white'}}>Agregar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#fb6467',
                      width: '40%',
                      margin: 5,
                      padding: 9,
                      borderRadius: 5,
                    }}>
                    <Text style={{color: 'white'}}>Eliminar</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          })
        ) : (
          <Text>Cargando...</Text>
        )}
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Success', {favoritos})}
          style={{
            backgroundColor: '#69c8Ec',
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
            backgroundColor: '#69c8Ec',
            width: 130,
            padding: 10,
            margin: 15,
            borderRadius: 5,
          }}>
          <Text style={{color: 'white'}}>Ir Atrás</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductPage;
