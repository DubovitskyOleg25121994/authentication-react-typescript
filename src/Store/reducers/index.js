import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth.reducer';

export default combineReducers({
  form: formReducer,
  formAuth: authReducer
});
