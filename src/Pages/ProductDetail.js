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
import {Context} from '../../App';

const Succes = ({navigation, route}) => {
  const windowHeight = useWindowDimensions().height;
  const {item} = route.params;
  const context = useContext(Context);

  return (
    <ScrollView style={{minHeight: windowHeight, backgroundColor: 'black'}}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{marginVertical: 15}}
          onPress={() => navigation.navigate('Success', {item})}>
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
          <Text
            style={{
              marginVertical: 5,
              fontWeight: '700',
              fontSize: 20,
              color: 'white',
            }}>
            Apariciones: {item.episode.length}
          </Text>
          <Text
            style={{
              marginVertical: 5,
              fontWeight: '700',
              fontSize: 20,
              color: 'white',
            }}>
            Ubicación: {item.location.name}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => context.setFavoritos(item.id)}
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
      </View>
    </ScrollView>
  );
};

export default Succes;
