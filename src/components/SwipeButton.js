import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class SwipeButton extends Component {

  render() {
    return (
      <View style={
        [
          styles.container,
          {
            backgroundColor: this.props.color,
            opacity: this.props.direction === "up" ? 0.7 : 0.5
          }
        ]}>
        {this.props.direction === "up" && <Icon name="plus" color="white" size={10} />}
        {this.props.direction === "down" && <Icon name="minus" color="white" size={10}  />}
      </View>
    );
  }
}

export default SwipeButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  }
});
