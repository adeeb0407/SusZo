import { BLOG_PUBLISH, BLOG_DELETE, FETCH_BLOGS_BY_USER, FETCH_ALL_BLOGS} from '../constants/actionTypes';
import * as api from '../api/index.js';

export const postBlog = (formData) => async (dispatch) => {
    try {
      const { data } = await api.postBlog(formData);
      console.log(data)
      dispatch({ type: BLOG_PUBLISH, data });
    //   router('/profile');
    } catch (error) {
      console.log(error);
    }
  };
export const deleteReply = (id) => async (dispatch) => {
    try {
      const { data } = await api.deleteReply(id);
      console.log(data)
      dispatch({ type: BLOG_DELETE, data });
    //   router('/profile');
    } catch (error) {
      console.log(error);
    }
  };

  export const fetchBlogByUser = (id) => async(dispatch) => {
    try {
        const {data} = await api.fetchBlogsByUser(id)
        dispatch({
            type : FETCH_BLOGS_BY_USER,
            payload : data
        }) // dispatch is coming form redux-thunk also the aysn (dispatch)
    } catch (error) {
        console.log(error.message)
    }
  }
  export const fetchAllBlogs = () => async(dispatch) => {
    try {
        const {data} = await api.fetchAllBlogs()
        dispatch({
            type : FETCH_ALL_BLOGS,
            payload : data
        }) // dispatch is coming form redux-thunk also the aysn (dispatch)
    } catch (error) {
        console.log(error.message)
    }
  }