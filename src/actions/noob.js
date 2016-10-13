import * as actionTypes from './actionTypes';
import noobApi from '../api/noobApi';
import { loadNoobsSuccess } from './noobs';

export const addNoob = (name) => {
  return dispatch => {
    return noobApi.addNoob(name)
      .then(noobs => dispatch(loadNoobsSuccess(noobs)))
  };
};

export const toggleNoob = (id) => {
  return {
    type: actionTypes.TOGGLE_NOOB,
    id
  };
};

// export const addNoobPoint = (id) => {
//   return {
//     type: actionTypes.ADD_NOOB_POINT,
//     id
//   };
// };
//
// export const addAssassinPoint = (id) => {
//   return {
//     type: actionTypes.ADD_ASSASSIN_POINT,
//     id
//   };
// };

export const loadNoobSuccess = (noob) => {
  return {
    type: actionTypes.LOAD_NOOB_SUCCESS,
    noob
  };
};

export const addNoobPoint = (id) => {
  return dispatch => {
    return noobApi.addNoobPoint(id)
      .then(noob => dispatch(loadNoobSuccess(noob)))
  };
};

export const addAssassinPoint = (id) => {
  return dispatch => {
    return noobApi.addAssassinPoint(id)
      .then(noob => dispatch(loadNoobSuccess(noob)))
  };
};

export const addNoobTextChange = (text) => {
  return {
    type: actionTypes.ADD_NOOB_TEXT_CHANGED,
    text
  };
};
