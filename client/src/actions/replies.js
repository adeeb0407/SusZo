import { REPLY_SEND, REPLY_DELETE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const postReply = (formData) => async (dispatch) => {
    try {
      const { data } = await api.postReply(formData);
      console.log(data)
      dispatch({ type: REPLY_SEND, data });
    //   router('/profile');
    } catch (error) {
      console.log(error);
    }
  };
export const deleteReply = (id) => async (dispatch) => {
    try {
      const { data } = await api.deleteReply(id);
      console.log(data)
      dispatch({ type: REPLY_DELETE, data });
    //   router('/profile');
    } catch (error) {
      console.log(error);
    }
  };