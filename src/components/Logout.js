import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, ActivityIndicator , TouchableOpacity} from 'react-native';
import * as authActions from '../actions/auth';
import { FBLoginManager } from 'react-native-facebook-login';

class Logout extends Component {

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log('loggin out............');
          var _this = this;
          FBLoginManager.logout(function(error, data) {
            if (!error) {
              console.log("logged out!.................!")
              _this.props.actions.logoutSuccess();
            } else {
              console.log(error, data);
            }
          });
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(Logout);
