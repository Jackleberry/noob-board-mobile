import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import NoobList from './components/NoobList';

export default function Init() {

  class NoobBoard extends Component {
    render() {
      return (
        <NoobList/>
      );
    }
  }

  AppRegistry.registerComponent('NoobBoard', () => NoobBoard);
};
