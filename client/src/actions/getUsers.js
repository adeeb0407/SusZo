import { FETCH_USERS, SEARCH_USER, FETCH_USERS_BY_ID,FETCH_USER_SERCHED,FETCH_USER_BY_PREFIX ,UPDATE_PROFILE, CAPTURE_ID} from '../constants/actionTypes';
import * as api from '../api/index.js';

export const fetchUsers = () => async(dispatch) => {
  try {
      const {data} = await api.getUsers()
      dispatch({
          type : FETCH_USERS,
          payload : data
      }) // dispatch is coming form redux-thunk also the aysn (dispatch)
  } catch (error) {
      console.log(error.message)
  }
}
export const searchUser = (username) => async(dispatch) => {
  try {
      const {data} = await api.searchUser(username)
      dispatch({
          type : FETCH_USER_SERCHED,
          payload : data
      }) // dispatch is coming form redux-thunk also the aysn (dispatch)
  } catch (error) {
      console.log(error.message)
  }
}
export const getAllUserByPrefix = (username) => async(dispatch) => {
  try {
      const {data} = await api.getAllUserByPrefix(username) // dispatch is coming form redux-thunk also the aysn (dispatch)
      dispatch({
          type : FETCH_USER_BY_PREFIX,
          payload : data
      })
  } catch (error) {
      console.log(error.message)
  }
}

export const searchByUsername = (username) => {
    return {type  : SEARCH_USER,
    payload : username};
}
export const captureId = (id) => {
    return {type  : CAPTURE_ID,
    payload : id,};
}

export const fetchUsersById = (id) => async(dispatch) => {
    try {
        const {data} = await api.getUsersById(id)
        dispatch({
            type : FETCH_USERS_BY_ID,
            payload : data
        }) // dispatch is coming form redux-thunk also the aysn (dispatch)
    } catch (error) {
        console.log(error.message)
    }
  }

  export const updateUserProfile = (id, profileData, router) => async (dispatch) => {
    try {
      const { data } = await api.updateProfile(id, profileData);
      router('/profile')
      dispatch({ type: UPDATE_PROFILE, payload: data });
      console.log(data)
    } catch (error) {
      console.log(error.message);
    }
  };
