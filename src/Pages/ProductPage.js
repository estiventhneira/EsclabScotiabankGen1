import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const ProductPage = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Success')}
        style={{
          backgroundColor: 'black',
          width: 130,
          padding: 10,
          margin: 15,
          borderRadius: 5,
        }}>
        <Text style={{color: 'white'}}>Ir a Success</Text>
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
