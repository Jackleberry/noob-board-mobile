import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root';
import initialState from './initialState';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const configureStore = () => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk, createLogger()));
};

export default configureStore;
