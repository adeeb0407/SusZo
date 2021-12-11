import { FETCH_USERS } from '../constants/actionTypes';
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