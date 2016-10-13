import * as actionTypes from '../actions/actionTypes';

const addNoobText = (state='', action) => {
  switch (action.type) {
    case actionTypes.ADD_NOOB_TEXT_CHANGED:
      return action.text;
    default:
      return state;
  }
};

export default addNoobText;
