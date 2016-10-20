import { combineReducers } from 'redux';
import noobs from './Noobs';
import noob from './Noob';
import addNoobText from './NewNoob';
import auth from './auth';

const root = combineReducers({
  noobs,
  noob,
  addNoobText,
  auth
});

export default root;
