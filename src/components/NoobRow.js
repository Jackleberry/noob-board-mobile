import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class NoobRow extends Component {
  _navigate() {
    const { noob, navigator, children} = this.props;
    const { id } = noob;
    console.log('.............navigate');
    console.log(noob);
    console.log('.............navigate');
    navigator.push({
      id: "NOOB_SCREEN",
      title: children,
      index: 1,
      passProps: {
        id,
        noob
      }
    });
  }
  render() {
    const { noob, addNoobPoint, addAssassinPoint, children} = this.props;
    const { noobPoints, assassinPoints } = noob;
    return (
      <View style={styles.noob}>
        <TouchableOpacity
          style={styles.noobTextContainer}
          onPress={() => this._navigate()}
        >
          <Text style={[styles.noobText, styles.name]}>{children}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={addNoobPoint}>
          <View style={styles.noobTextContainer}>
            <Icon name="reddit-alien" size={20} color="forestgreen" style={styles.icon} />
            <Text style={[styles.noobText, styles.noobPoints]}>
              {noobPoints}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={addAssassinPoint}>
          <View style={styles.noobTextContainer}>
            <Icon name="gitlab" size={20} color="purple" style={styles.icon} />
            <Text style={[styles.noobText, styles.assassinPoints]}>
              {assassinPoints}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  noob: {
    flex: 1,
    height: 50,
    padding: 5,
    marginBottom: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  noobTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  noobText: {
    fontSize: 15,
    color: 'black',
    opacity: 0.8
  },
  name: {
    flex: 1
  },
  noobPoints: {
    width: 50
  },
  assassinPoints: {
    width: 50
  },
  icon: {
    flex: 1,
    paddingRight: 8
  }
});

export default NoobRow;
