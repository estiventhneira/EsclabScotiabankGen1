import React from 'react';
import {Image} from 'react-native';

const index = ({url}) => {
  return <Image style={{height: 100, width: 100}} source={{uri: url}} />;
};

export default index;
