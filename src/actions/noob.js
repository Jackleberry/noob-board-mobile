import * as actionTypes from './actionTypes';
import noobApi from '../api/noobApi';
import { loadNoobsSuccess } from './noobs';
import isEmpty from 'lodash/isEmpty';
import uuid from 'uuid';

export const addNoob = (name) => {
  return dispatch => {
    dispatch({
      type: actionTypes.ADD_NOOB,
      id: uuid.v4(),
      name: name + " (not saved)"
    });
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

export const addNoobPointLocal = (id) => {
  return {
    type: actionTypes.ADD_NOOB_POINT,
    id
  };
};

export const addAssassinPointLocal = (id) => {
  return {
    type: actionTypes.ADD_ASSASSIN_POINT,
    id
  };
};

export const removeNoobPointLocal = (id) => {
  return {
    type: actionTypes.REMOVE_NOOB_POINT,
    id
  };
};

export const removeAssassinPointLocal = (id) => {
  return {
    type: actionTypes.REMOVE_ASSASSIN_POINT,
    id
  };
};

export const addNoobPoint = (id) => {
  return dispatch => {
    dispatch(addNoobPointLocal(id));
    return noobApi.addNoobPoint(id);
  };
};

export const addAssassinPoint = (id) => {
  return dispatch => {
    dispatch(addAssassinPointLocal(id));
    return noobApi.addAssassinPoint(id);
  };
};

export const removeNoobPoint = (id) => {
  return dispatch => {
    dispatch(removeNoobPointLocal(id));
    return noobApi.removeNoobPoint(id);
  };
};

export const removeAssassinPoint = (id) => {
  return dispatch => {
    dispatch(removeAssassinPointLocal(id));
    return noobApi.removeAssassinPoint(id);
  };
};

export const addNoobTextChange = (text) => {
  return {
    type: actionTypes.ADD_NOOB_TEXT_CHANGED,
    text
  };
};

export const loadNoobSuccess = (noob) => {
  return {
    type: actionTypes.LOAD_NOOB_SUCCESS,
    noob
  };
};

export const loadNoob = (id) => {
  return (dispatch) => {
    if (isEmpty(id)) {
      return dispatch(loadNoobSuccess({}));
    }
    return noobApi.getNoob(id)
      .then(noob => dispatch(loadNoobSuccess(noob)));
  };
};

const deleteNoobSuccess = () => {
  return {
    type: actionTypes.DELETE_NOOB_SUCCESS
  };
};

export const deleteNoob = (id) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.DELETE_NOOB,
      id
    });
    return noobApi.deleteNoob(id)
      .then(() => dispatch(deleteNoobSuccess()))
  };
};
