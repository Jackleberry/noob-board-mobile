import * as types from '../actions/actionTypes';

const noob = (state={}, action) => {
  switch (action.type) {
    case types.LOAD_NOOB_SUCCESS:
      return action.noob;
    case types.ADD_NOOB:
      return {
        id: action.id,
        name: action.name,
        noobPoints: 0,
        assassinPoints: 0,
        outOfAction: false
      };
    case types.TOGGLE_NOOB:
      if (state.id != action.id) {
        return state;
      }

      return {
        ...state,
        outOfAction: !state.outOfAction
      };
    case types.ADD_NOOB_POINT:
      if (state.id != action.id) {
        return state;
      }

      return {
        ...state,
        noobPoints: state.noobPoints + 1
      };
    case types.ADD_ASSASSIN_POINT:
      if (state.id != action.id) {
        return state;
      }

      return {
        ...state,
        assassinPoints: state.assassinPoints + 1
      };
    default:
      return state;
  }
};

export default noob;
