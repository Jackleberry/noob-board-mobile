import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swipeout from 'react-native-swipeout';
import * as routeNames from './common/routeNames';
import { getRouteById } from './common/routes';
import SwipeButton from './SwipeButton';

class NoobRow extends Component {
  _navigate() {
    const { noob, navigator, children} = this.props;
    const { id } = noob;
    navigator.push({
      ...getRouteById(routeNames.NOOB_SCREEN),
      title: children,
      passProps: {
        id,
        noob
      }
    });
  }
  render() {
    const { noob, addNoobPoint, addAssassinPoint, removeNoobPoint, removeAssassinPoint, deleteNoob, children} = this.props;
    const { noobPoints, assassinPoints } = noob;
    let rightButtons = [
      {
        component: <SwipeButton direction="up" color="midnightblue" />,
        onPress: addAssassinPoint
      },
      {
        component: <SwipeButton direction="down" color="midnightblue" />,
        onPress: removeAssassinPoint
      }
    ];

    let leftButtons = [
      {
        component: <SwipeButton direction="up" color="forestgreen" />,
        onPress: addNoobPoint
      },
      {
        component: <SwipeButton direction="down" color="forestgreen" />,
        onPress: removeNoobPoint
      }
    ];
    const confirmDelete = () => {
      Alert.alert(
        children,
        "Are you sure you want to delete " + children,
        [
          {text: "Delete", onPress: deleteNoob, style: 'destructive'},
          {text: "Cancel", style: 'cancel'},
        ]
      )
    };

    return (
      <Swipeout
        right={rightButtons}
        left={leftButtons}
        sensitivity={1}
        backgroundColor= 'transparent'>
        <TouchableOpacity onLongPress={confirmDelete}>
        <View style={styles.row}>
          <TouchableOpacity onPress={addNoobPoint} onLongPress={confirmDelete}>
            <View style={[styles.pointsContainer, styles.noobContainer]}>
              <Icon name="reddit-alien" size={20} color="forestgreen" style={styles.icon} />
              <Text style={[styles.text]}>
                {noobPoints}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textContainer}
            onLongPress={confirmDelete}
            onPress={() => this._navigate()}>
            <Text style={[styles.text]}>{children}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={addAssassinPoint}  onLongPress={confirmDelete}>
            <View style={[styles.pointsContainer, styles.assassinContainer]}>
              <Icon name="gitlab" size={20} color="midnightblue" style={styles.icon} />
              <Text style={[styles.text]}>
                {assassinPoints}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      </Swipeout>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    height: 50,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 50,
  },
  noobContainer: {
    justifyContent: 'flex-start',
  },
  assassinContainer: {
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 15,
    color: 'black',
    opacity: 0.8
  },
  icon: {
    flex: 1,
    paddingRight: 2
  }
});

export default NoobRow;
