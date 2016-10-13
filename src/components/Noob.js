import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Noob = ({noobPoints, assassinPoints, children}) => {
  return (
    <View style={styles.noob}>
        <Text style={[styles.noobText, styles.name]}>{children}</Text>
        <Text style={[styles.noobText, styles.noobPoints]}>{noobPoints}</Text>
        <Text style={[styles.noobText, styles.assassinPoints]}>{assassinPoints}</Text>
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

export default Noob;
