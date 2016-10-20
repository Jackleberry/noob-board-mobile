import React, { PropTypes, Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { FBLogin, FBLoginManager } from 'react-native-facebook-login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../actions/auth';
import { getRouteById, getPushRoute } from './common/routes';
import * as routeNames from './common/routeNames';

class Login extends Component {

  render() {
    var _this = this;
    return (
      <View style={styles.login}>
        <FBLogin
          ref={(fbLogin) => { this.fbLogin = fbLogin }}
          permissions={["email"]}
          loginBehavior={FBLoginManager.LoginBehaviors.Native}
          onLogin={function(data){
            _this.setState({isLoadingUser: true});
            console.log("Logged in!.................");
            console.log(data);
            _this.props.actions.loginSuccess(data);
            //const { navigator } = _this.props;
            //navigator.push(getPushRoute(getRouteById(routeNames.DASHBOARD)));
          }}
          onLogout={function(){
            console.log("Logged out................");
          }}
          onLoginFound={function(data){
            console.log("Existing login found........................");
            console.log(data);
            console.log("Existing login found end..............");
           // _this.props.actions.loginSuccess(data);
           // const { navigator } = _this.props;
            //navigator.push(getPushRoute(getRouteById(routeNames.DASHBOARD)));
          }}
          onLoginNotFound={function(){
            console.log("No user logged in....................");
          }}
          onError={function(data){
            console.log("ERROR..........................");
            console.log(data);
          }}
          onCancel={function(){
            console.log("User cancelled....................");
          }}
          onPermissionsMissing={function(data){
            console.log("Check permissions!........................");
            console.log(data);
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  activityIndicator: {
    flex: 1
  }
});
