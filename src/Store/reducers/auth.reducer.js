import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  user: null,
  loginFail: null,
  register: null,
  registerFail: null
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SIGN_UP_SUCCESS:
      console.log('SIGN_UP_SUCCESS', payload);
      return {
        ...state,
        user: payload
      };
    case SIGN_UP_FAIL:
      console.log('SIGN_UP_FAILE', payload);
      return {
        ...state,
        loginFail: payload
      };
    case SIGN_IN_SUCCESS:
      console.log('SIGN_IN_SUCCESS', payload);
      return {
        ...state,
        register: payload
      };
    case SIGN_IN_FAIL:
      console.log('SIGN_IN_FAILE', payload);
      return {
        ...state,
        registerFail: payload
      };
    default:
      return state;
  }
};
