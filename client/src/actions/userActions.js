import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';
import { message } from 'antd';

export const login = (formData, router, setloginSuccess) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    console.log('hello')
    dispatch({ type: AUTH, data });
    message.success('User Logged in Successfully', 2)
    router('/profile');
  } catch (error) {
    message.error('Username or Password Invalid', 2)
    console.log(error);
  }
};

export const register = (formData, router) => async (dispatch) => {
  try {

    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    router('/edituserprofile');
    message.success('User Registed Successfully', 2)
  } catch (error) {
    message.error('Few Details are incorrect', 2)
    console.log(error);
  }
};