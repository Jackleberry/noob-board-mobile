import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry, View } from 'react-native';
import configureStore from './store/configureStore';
import App from './components/App';

export default function Init() {

  const store = configureStore();

  class NoobBoard extends Component {

    render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      );
    }
  }

  AppRegistry.registerComponent('NoobBoard', () => NoobBoard);
};
