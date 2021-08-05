/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const Succes = ({navigation, route}) => {
  const {CarritoDeCompra} = route.params;

  return (
    <View>
      {CarritoDeCompra.map((item, index) => (
        <View
          style={{
            marginVertical: 15,
            marginHorizontal: 30,
          }}>
          <Image
            source={{uri: `${item.url}`}}
            style={{height: 150, width: 150}}
          />
          <View
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              width: 150,
              borderRadius: 5,
            }}>
            <Text key={item.id} style={{fontSize: 16, marginVertical: 3}}>
              {item.itemName}
            </Text>
            <Text style={{fontSize: 15}}>articulo: {index + 1}</Text>
          </View>
        </View>
      ))}
      <TouchableOpacity
        onPress={() => navigation.popToTop()}
        style={{
          backgroundColor: 'black',
          width: 130,
          padding: 10,
          margin: 15,
          borderRadius: 5,
        }}>
        <Text style={{color: 'white'}}>Ir a Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Succes;
