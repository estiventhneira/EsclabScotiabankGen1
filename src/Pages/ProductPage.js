/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
const axios = require('axios').default;
import gql from 'graphql-tag';
import {useQuery} from '@apollo/client';

const CHARACTERS = gql`
  query characters($page: Int) {
    characters(page: $page) {
      results {
        name
        image
        status
        gender
        species
      }
    }
  }
`;

const ProductPage = ({navigation}) => {
  const [character, setCharacter] = useState('');
  const [favoritos, setFavoritos] = useState([]);

  const {loading, error, data} = useQuery(CHARACTERS);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/?page=1')
      .then(response => setCharacter(response.data));
  }, []);

  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      {data && loading === false ? (
        <View style={{margin: 20, marginBottom: 0, alignItems: 'center'}}>
          {data.characters.results.map((item, index) => {
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
          })}
        </View>
      ) : (
        <Text
          style={{fontSize: 27, fontWeight: '700', margin: 40, color: 'white'}}>
          Cargando...
        </Text>
      )}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 75,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Success', {favoritos})}
          style={{
            backgroundColor: '#059669',
            width: 130,
            padding: 10,
            margin: 15,
            borderRadius: 5,
          }}>
          <Text style={{color: 'white', fontWeight: '700'}}>Ir a pagar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductPage;
