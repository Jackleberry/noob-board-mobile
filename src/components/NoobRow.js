import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';

class NoobRow extends Component {
  _navigate() {
    const {id, noobPoints, assassinPoints, addNoobPoint, addAssassinPoint, navigator, children} = this.props;
    navigator.push({
      id: "NOOB_SCREEN",
      title: children,
      index: 1,
      passProps: {
        id,
        noobPoints,
        assassinPoints,
        addNoobPoint,
        addAssassinPoint
      }
    });
  }
  render() {
    const {id, noobPoints, assassinPoints, addNoobPoint, addAssassinPoint, navigator, children} = this.props;
    return (
      <View style={styles.noob}>
        <TouchableOpacity
          style={styles.noobTextContainer}
          onPress={() => this._navigate()}
        >
          <Text style={[styles.noobText, styles.name]}>{children}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={addNoobPoint}>
          <Text style={[styles.noobText, styles.noobPoints]}>N {noobPoints}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={addAssassinPoint}>
          <Text style={[styles.noobText, styles.assassinPoints]}>A {assassinPoints}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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
  noobTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
    flex: 1
  },
  noobPoints: {
    width: 40
  },
  assassinPoints: {
    width: 40
  }
});

export default NoobRow;
