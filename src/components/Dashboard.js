import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import AddNoob from './AddNoob';
import NoobList from './NoobList';
import Header from './Header';

class Dashboard extends Component {

  render() {
    return (
      <View style={styles.container}>
        <AddNoob/>
        <NoobList navigator={this.props.navigator}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 65
  }
});

export default Dashboard;
