import noob from './Noob';
import * as types from '../actions/actionTypes';

const noobs = (state = [], action) => {
  switch (action.type) {
    case types.ADD_NOOB:
      return [
        ...state,
        noob(state, action)
      ];
    case types.TOGGLE_NOOB:
      return state.map(n => noob(n, action));
    case types.ADD_NOOB_POINT:
      return state.map(n => noob(n, action));
    case types.ADD_ASSASSIN_POINT:
      return state.map(n => noob(n, action));
    default:
      return state;
  }
};

export default noobs;
