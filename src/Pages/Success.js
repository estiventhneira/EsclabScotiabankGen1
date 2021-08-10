/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  Image,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
const axios = require('axios').default;

const Success = ({navigation, route}) => {
  const [forpay, setForPay] = useState([]);
  const windowHeight = useWindowDimensions().height;
  const {favoritos} = route.params;

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${favoritos}`)
      .then(response => setForPay(response.data));
  }, [favoritos]);

  return (
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
          {forpay.length !== 0
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
    </ScrollView>
  );
};

export default Success;
