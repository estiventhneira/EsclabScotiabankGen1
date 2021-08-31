/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Image,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const AddCharacter = ({navigation}) => {
  const heigth = useWindowDimensions().height;
  const [imageUri, setImageUri] = useState();

  return (
    <View style={{backgroundColor: 'black', minHeight: heigth}}>
      <View>
        <Text
          style={{
            color: 'white',
            fontSize: 33,
            fontWeight: '700',
            textAlign: 'center',
            marginTop: 25,
          }}>
          Añadir personaje
        </Text>
        {imageUri ? (
          <Image
            style={{height: 250, marginTop: 30, marginHorizontal: 20}}
            source={{
              uri: `${imageUri}`,
            }}
          />
        ) : (
          <Image
            style={{height: 250, marginTop: 30, marginHorizontal: 20}}
            source={{
              uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-y-morty-pistola-portales-1626540387.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*',
            }}
          />
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 15,
        }}>
        <TouchableOpacity
          onPress={() =>
            launchCamera(
              {cameraType: 'back', mediaType: 'photo', saveToPhotos: true},
              response => {
                if (response.didCancel) {
                  return;
                }
                if (!response.assets[0].uri) {
                  return;
                }
                setImageUri(response.assets[0].uri);
              },
            )
          }
          style={{
            backgroundColor: 'white',
            width: 130,
            padding: 10,
            margin: 15,
            borderRadius: 5,
          }}>
          <Text style={{textAlign: 'center'}}>Usar cámara</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            launchImageLibrary({mediaType: 'photo'}, response => {
              if (response.didCancel) {
                return;
              }
              if (!response.assets[0].uri) {
                return;
              }
              setImageUri(response.assets[0].uri);
            })
          }
          style={{
            backgroundColor: 'white',
            width: 130,
            padding: 10,
            margin: 15,
            borderRadius: 5,
          }}>
          <Text style={{textAlign: 'center'}}>Usar Galeria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddCharacter;
