import { combineReducers } from 'redux';
import noobs from './Noobs';
import addNoobText from './NewNoob';

const root = combineReducers({
  noobs,
  addNoobText
});

export default root;
