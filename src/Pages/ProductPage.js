/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/client';
import {CarritoContext} from '../Context/CarritoContext';

const CHARACTERS = gql`
  query characters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
        status
        gender
        species
        episode {
          name
        }
        location {
          name
        }
      }
    }
  }
`;

const ProductPage = ({navigation}) => {
  const context = useContext(CarritoContext);
  const {setFavoritos} = context;

  const {loading, error, data} = useQuery(CHARACTERS);

  if (error) {
    console.warn(error);
    return (
      <View>
        <Text>Error :c</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      {data && loading === false ? (
        <View style={{margin: 20, marginBottom: 0, alignItems: 'center'}}>
          {data.characters.results.map((item, index) => {
            return (
              <TouchableOpacity
                style={{marginVertical: 15}}
                onPress={() => {
                  navigation.navigate('ProductDetail');
                  context.setCharacterSelected(item);
                }}
                key={index}>
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
                    onPress={() => {
                      setFavoritos(favoritos => [...favoritos, item.id]);
                    }}
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
                    onPress={() => {
                      setFavoritos(favoritos => {
                        const newArr = favoritos.filter(
                          value => value !== item.id,
                        );
                        return newArr;
                      });
                    }}
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
          onPress={() => navigation.navigate('Success')}
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
