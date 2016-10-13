import * as actionTypes from './actionTypes';
import noobApi from '../api/noobApi';

export const loadNoobsSuccess = (noobs) => {
  return {
    type: actionTypes.LOAD_NOOBS_SUCCESS,
    noobs
  }
};

export function fetchNoobs() {
  return dispatch => {
    return noobApi.getAllNoobs()
      .then(noobs => dispatch(loadNoobsSuccess(noobs)));
  };
}
