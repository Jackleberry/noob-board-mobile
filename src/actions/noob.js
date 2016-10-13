import * as actionTypes from './actionTypes';

let nextId = 3;
export const addNoob = (name) => {
  return {
    type: actionTypes.ADD_NOOB,
    id: nextId++,
    name
  };
};

export const toggleNoob = (id) => {
  return {
    type: actionTypes.TOGGLE_NOOB,
    id
  };
};

export const addNoobPoint = (id) => {
  return {
    type: actionTypes.ADD_NOOB_POINT,
    id
  };
};

export const addAssassinPoint = (id) => {
  return {
    type: actionTypes.ADD_ASSASSIN_POINT,
    id
  };
};

export const addNoobTextChange = (text) => {
  return {
    type: actionTypes.ADD_NOOB_TEXT_CHANGED,
    text
  };
};
