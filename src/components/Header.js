import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Header extends Component {

  render() {
    return (
      <View style={styles.headingRow}>
        <Text style={styles.heading}>Noob Board</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headingRow: {
    height: 50,
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'steelblue',
    textShadowColor: 'steelblue',
    textShadowRadius: 2,
    textShadowOffset: {width: 1, height: 1}
  }
});

export default Header;
