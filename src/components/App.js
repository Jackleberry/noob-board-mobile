import React, { Component } from 'react';
import { Text, View, StyleSheet, Navigator, TouchableOpacity } from 'react-native';
import Dashboard from './Dashboard';
import Noob from './Noob';

class App extends Component {

  renderScene(route, navigator) {
    switch(route.id) {
      case "MAIN":
        return <Dashboard navigator={navigator}/>;
      case "NOOB_SCREEN":
        return <Noob navigator={navigator} {...route.passProps}/>;
      default:
        return <Dashboard navigator={navigator}/>;
    }
  }

  render() {
    const routes = [
      {id: "MAIN", title: "Noob Board", index: 0},
      {id: "NOOB_SCREEN", title: "Weasel", index: 1, passProps: {name: "Weasel", noobPoints: 44, assassinPoints: 34}},
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        style={styles.container}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={RouteMapper}
            style={styles.navBar}
          />
        }
      />
    );
  }
}

const RouteMapper = {
  LeftButton: (route, navigator, index, navState) => {
    if (index === 0) {
      return null;
    }
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
      <Text style={styles.navBarLeftText}>
        back
      </Text>
      </TouchableOpacity>
    );
  },
  RightButton: (route, navigator, index, navState) => {
    return null;
  },
  Title: (route, navigator, index, navState) => {
    return (
        <Text style={styles.title}>
          {route.title}
        </Text>
    );
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  navBar: {
    flex: 1,
    padding: 10,
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 65
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'steelblue',
    textShadowColor: 'steelblue',
    textShadowRadius: 2,
    textShadowOffset: {width: 1, height: 1}
  },
  navBarLeftButton: {
    padding: 10
  },
  navBarLeftText: {
    color: 'steelblue'
  }
});

export default App;
