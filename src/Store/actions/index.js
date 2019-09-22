import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL
} from '../actions/types';
import { instance } from '../../utills/axios';

export const onLogin = data => async dispatch => {
  try {
    console.log('data', data);
    const responce = await instance.post('/auth/signup', data);
    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: responce.data
    });
  } catch (error) {
    dispatch({
      type: SIGN_UP_FAIL,
      payload: error
    });
    console.log('error', error);
  }
};

export const onRegister = data => async dispatch => {
  try {
    console.log('data', data);
    const responce = await instance.post('/auth/signin', data);
    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: responce.data
    });
  } catch (error) {
    dispatch({
      type: SIGN_IN_FAIL,
      payload: error
    });
    console.log('error', error);
  }
};
