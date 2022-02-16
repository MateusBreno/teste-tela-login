import types from '../types';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case types.LOG_IN_FAILURE:
    case types.LOG_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default authReducer;
