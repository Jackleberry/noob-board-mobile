import { combineReducers } from 'redux';
import noobs from './Noobs';
import noob from './Noob';
import addNoobText from './NewNoob';

const root = combineReducers({
  noobs,
  noob,
  addNoobText
});

export default root;
