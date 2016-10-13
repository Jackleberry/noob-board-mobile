import { createStore } from 'redux';
import rootReducer from '../reducers/root';
import initialState from './initialState';

const configureStore = () => {
  return createStore(rootReducer, initialState);
};

export default configureStore;
