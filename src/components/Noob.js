import React, { Component } from 'react';
import { Text, View } from 'react-native';

const Noob = ({noobPoints, assassinPoints, children}) => {
  return (
    <Text>{children}</Text>
  );
}

export default Noob;
