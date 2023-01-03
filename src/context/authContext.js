import AsyncStorage from '@react-native-async-storage/async-storage';
import trackerApi from '../api/tracker';
import {commonActions, navigate} from '../helper/navigationRef';

import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errormessage: action.payload};
    case 'signin':
      return {errormessage: '', token: action.payload};
    case 'signout':
      return {errormessage: '', token: null};
    default:
      return state;
  }
};
const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({type: 'signin', payload: token});
    commonActions('Home');
  } else {
    commonActions('Signin');
  }
};

const signUp = dispatch => {
  return async ({email, password}) => {
    try {
      const response = await trackerApi.post('/signup', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signin', payload: response.data.token});
      navigate('Signin');
    } catch (error) {
      dispatch({type: 'add_error', payload: 'worng signUp'});
    }
  };
};
const signIn = dispatch => {
  return async ({email, password}) => {
    try {
      const response = await trackerApi.post('/signin', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signin', payload: response.data.token});
      commonActions('Home');
    } catch (error) {
      dispatch({type: 'add_error', payload: 'worng signin'});
    }
  };
};
const signOut = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({type: 'signout'});
  commonActions('Signin');
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signUp, signIn, tryLocalSignin, signOut},
  {token: null, errormessage: ''},
);
