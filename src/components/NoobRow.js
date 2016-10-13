import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

const NoobRow = ({noobPoints, assassinPoints, addNoobPoint, addAssassinPoint, children}) => {
  return (
    <View style={styles.noob}>
      <Text style={[styles.noobText, styles.name]}>{children}</Text>
      <TouchableHighlight onPress={addNoobPoint}>
        <Text style={[styles.noobText, styles.noobPoints]}>N {noobPoints}</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={addAssassinPoint}>
        <Text style={[styles.noobText, styles.assassinPoints]}>A {assassinPoints}</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  noob: {
    flex: 1,
    height: 40,
    padding: 5,
    marginBottom: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'mediumseagreen'
  },
  noobText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'seagreen',
    textShadowColor: 'seagreen',
    textShadowRadius: 1,
    textShadowOffset: {width: 1, height: 1}
  },
  name: {
    flex: 1,
  },
  noobPoints: {
    width: 40
  },
  assassinPoints: {
    width: 40
  }
});

export default NoobRow;
