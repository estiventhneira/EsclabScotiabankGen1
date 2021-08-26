/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {CarritoContext} from '../Context/CarritoContext';

const ProductDetail = ({navigation}) => {
  const windowHeight = useWindowDimensions().height;

  const context = useContext(CarritoContext);
  const {characterSelected, setFavoritos} = context;

  return (
    <ScrollView style={{minHeight: windowHeight, backgroundColor: 'black'}}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <View style={{marginVertical: 15}}>
          <Image
            source={{uri: `${characterSelected.image}`}}
            style={{height: 250, width: 250}}
          />
          <Text
            style={{
              marginVertical: 5,
              fontWeight: '700',
              fontSize: 20,
              color: 'white',
            }}>
            {characterSelected.name}
          </Text>
          <Text
            style={{
              marginVertical: 5,
              fontWeight: '700',
              fontSize: 20,
              color: 'white',
            }}>
            Status: {characterSelected.status}
          </Text>
          <Text
            style={{
              marginVertical: 5,
              fontWeight: '700',
              fontSize: 20,
              color: 'white',
            }}>
            Genero: {characterSelected.gender}
          </Text>
          <Text
            style={{
              marginVertical: 5,
              fontWeight: '700',
              fontSize: 20,
              color: 'white',
            }}>
            Especie: {characterSelected.species}
          </Text>
          <Text
            style={{
              marginVertical: 5,
              fontWeight: '700',
              fontSize: 20,
              color: 'white',
            }}>
            Apariciones: {characterSelected.episode.length}
          </Text>
          <Text
            style={{
              marginVertical: 5,
              fontWeight: '700',
              fontSize: 20,
              color: 'white',
            }}>
            Ubicación: {characterSelected.location.name}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() =>
                setFavoritos(favoritos => [...favoritos, characterSelected.id])
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
              onPress={() => {
                setFavoritos(favoritos => {
                  const newArr = favoritos.filter(
                    value => value !== characterSelected.id,
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

export default ProductDetail;
