/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from 'react-native';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/client';
import {CarritoContext} from '../Context/CarritoContext';

const CHARACTERSBYIDS = gql`
  query characters($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      name
      id
      status
      gender
      species
      image
    }
  }
`;

const Success = ({navigation}) => {
  // Start Context
  const context = useContext(CarritoContext);
  const {favoritos, setFavoritos} = context;
  // END Context

  const [modalVisible, setModalVisible] = useState(false);
  const windowHeight = useWindowDimensions().height;

  const {
    data: data_characters_byid,
    loading: loading_characters_byid,
    error: error_characters_byid,
  } = useQuery(CHARACTERSBYIDS, {
    variables: {ids: favoritos},
  });



  useEffect(() => {
    if (favoritos.length > 0) {
    } else {
      setModalVisible(true);
    }
  }, []);

  if (loading_characters_byid) {
    return (
      <ScrollView style={{backgroundColor: 'black'}}>
        <View style={{minHeight: windowHeight, margin: 20}}>
          <Text style={{color: 'white'}}>Cargando...</Text>
        </View>
      </ScrollView>
    );
  }

  if (error_characters_byid) {
    return <Text>Error :c</Text>;
  }

  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: 'black'}}>
        <View style={{minHeight: windowHeight, margin: 20}}>
          <View>
            <Text
              style={{
                color: 'white',
                fontSize: 28,
                fontWeight: '700',
                margin: 15,
                textAlign: 'center',
              }}>
              Check-Out
            </Text>
          </View>
          <View>
            {data_characters_byid &&
            data_characters_byid.charactersByIds[0].id !== null
              ? data_characters_byid.charactersByIds.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{marginVertical: 15}}
                      onPress={() =>
                        navigation.navigate('ProductDetail', {item})
                      }>
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
                    </View>
                  );
                })
              : null}
          </View>
          <TouchableOpacity
            onPress={() => {
              if (favoritos.length === 0) {
                setModalVisible(true);
              }
            }}
            style={{
              backgroundColor: 'white',
              padding: 12,
              width: 170,
              marginBottom: 30,
            }}>
            <Text style={{color: 'black', fontSize: 17}}>
              Pagar: {favoritos.length * 5}$
            </Text>
          </TouchableOpacity>
        </View>
        <Modal visible={modalVisible} transparent={true} animationType={'fade'}>
          <View
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <View
              style={{
                backgroundColor: 'white',
                height: 150,
                width: 300,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 30,
              }}>
              <Text style={{color: 'black', fontSize: 17}}>
                Por favor agrega elementos a favoritos
              </Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{marginTop: 10}}
                  onPress={() => setModalVisible(false)}>
                  <Text
                    style={{
                      backgroundColor: '#EF4444',
                      paddingHorizontal: 14,
                      paddingVertical: 7,
                      color: 'white',
                      borderRadius: 10,
                      overflow: 'hidden',
                      fontSize: 15,
                      fontWeight: '600',
                    }}>
                    Cerrar
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginTop: 10}}
                  onPress={() => {
                    navigation.navigate('ProductPage');
                    setModalVisible(false);
                  }}>
                  <Text
                    style={{
                      backgroundColor: 'black',
                      paddingHorizontal: 14,
                      paddingVertical: 7,
                      color: 'white',
                      borderRadius: 10,
                      overflow: 'hidden',
                      fontSize: 15,
                      fontWeight: '600',
                      marginLeft: 15,
                    }}>
                    Ir a personajes
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Success;
