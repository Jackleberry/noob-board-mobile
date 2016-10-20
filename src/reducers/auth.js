import * as types from '../actions/actionTypes';

const auth = (state={}, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        user: action.user
      };
    case types.LOGOUT_SUCCESS:
      return {
        isLoggedIn: false
      }
    default:
      return state;
  }
};

export default auth;
