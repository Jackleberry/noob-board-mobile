import React, { Component } from 'react';
import { Text, View, StyleSheet, Navigator, TouchableOpacity, ActivityIndicator } from 'react-native';
import Dashboard from './Dashboard';
import Noob from './Noob';
import Login from './Login';
import Logout from './Logout';
import { FBLoginManager } from 'react-native-facebook-login';
import routes from './common/routes';
import * as routeNames from './common/routeNames';
import { connect } from 'react-redux';
import * as authActions from '../actions/auth';
import { bindActionCreators } from 'redux';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checkedCredentials: false
    };
  }

  renderScene(route, navigator) {
    switch(route.id) {
      case routeNames.DASHBOARD:
        return <Dashboard navigator={navigator}/>;
      case routeNames.NOOB_SCREEN:
        return <Noob navigator={navigator} {...route.passProps}/>;
      default:
        return <Dashboard navigator={navigator}/>;
    }
  }

  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.FloatFromLeft;
  }

  render() {

    if (!this.state.checkedCredentials) {
      var _this = this;
      FBLoginManager.getCredentials(function (error, data) {
        if (!error) {
          _this.props.actions.loginSuccess(data);
        }
        _this.setState({checkedCredentials: true});
      });

      return <ActivityIndicator size="large" style={{flex: 1}}/>;
    } else if (this.props.auth.isLoggedIn) {
      return (
        <Navigator
          initialRoute={routes[0]}
          initialRouteStack={routes}
          configureScene={this.configureScene}
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
    } else {
      return <Login />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

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
    return (
      <Logout />
    );
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 65,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
    textShadowColor: 'lightgrey',
    textShadowRadius: 2,
    textShadowOffset: {width: 1, height: 1}
  },
  navBarLeftButton: {
    padding: 10
  },
  navBarLeftText: {
    color: 'grey'
  }
});

