import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import AddNoob from './AddNoob';
import NoobList from './NoobList';
import Header from './Header';

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <AddNoob/>
        <NoobList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 5
  }
});

export default App;
