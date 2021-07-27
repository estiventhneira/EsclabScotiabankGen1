/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [counter, setCounter] = useState(0);

  return (
    <SafeAreaView>
      <View>
        <TextInput
          onChangeText={e => {
            setText(e);
          }}
          placeholder={'Hola mundo'}
          style={{
            borderWidth: 1,
            maxWidth: 250,
            borderRadius: 3,
            borderColor: 'gray',
            margin: 10,
            padding: 4,
          }}
        />
      </View>
      <View>
        <Text style={{margin: 13}}>{text}</Text>
      </View>

      <TouchableOpacity
        style={{
          margin: 20,
          backgroundColor: 'black',
          borderRadius: 4,
          padding: 5,
          width: 100,
        }}
        onPress={() => setCounter(counter + 1)}>
        <View>
          <Text style={{color: 'white'}}>Button</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text>{counter}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
