/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
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
const axios = require('axios').default;

const Success = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [forpay, setForPay] = useState([]);
  const windowHeight = useWindowDimensions().height;
  const favoritos = route.params.favoritos ? route.params.favoritos : [];

  useEffect(() => {
    if (favoritos.length > 0) {
      axios
        .get(`https://rickandmortyapi.com/api/character/${favoritos}`)
        .then(response => {
          if (response.data.length === undefined) {
            setForPay([response.data]);
          } else {
            setForPay(response.data);
          }
        })
        .catch(error => {
          console.warn(error);
          setForPay([]);
        });
    } else {
      setModalVisible(true);
      setForPay([]);
    }
  }, []);

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
            {forpay && forpay.length !== 0
              ? forpay.map((item, index) => {
                  return (
                    <View
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
