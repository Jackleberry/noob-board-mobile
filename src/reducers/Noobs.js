import noob from './Noob';
import * as types from '../actions/actionTypes';
import findIndex from 'lodash/findIndex';

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
    case types.LOAD_NOOBS_SUCCESS:
      return action.noobs;
    case types.LOAD_NOOB_SUCCESS:
      const index = findIndex(state, {id: action.noob.id});
      if (index < 0) {
        return state;
      }
      return [
        ...state.slice(0, index),
        noob(state, action),
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
};

export default noobs;
