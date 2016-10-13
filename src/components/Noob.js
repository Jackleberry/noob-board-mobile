import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';

class Noob extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.pointsTouch}
          onPress={this.props.addNoobPoint}
        >
        <View style={styles.pointsContainer}>
            <Text style={styles.points}>
              N {this.props.noobPoints}
            </Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pointsTouch}
          onPress={this.props.addAssassinPoint}
        >
        <View style={styles.pointsContainer}>
            <Text style={styles.points}>
              A {this.props.assassinPoints}
            </Text>
        </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 65,
    backgroundColor: 'mediumaquamarine'
  },
  pointsTouch: {
    flex: 1,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pointsContainer: {
    flex: 1,
    height: 100,
    margin: 2,
    backgroundColor: 'mediumseagreen',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  points: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'seagreen',
    textShadowColor: 'seagreen',
    textShadowRadius: 1,
    textShadowOffset: {width: 1, height: 1}
  }
});


export default Noob;
