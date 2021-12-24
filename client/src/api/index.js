import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const signIn = (formData) => API.post('/user/login', formData);
export const signUp = (formData) => API.post('/user/register', formData);
//Search User
export const getUsers = () => API.get('/user/login/details');
export const searchUser = (username) => API.post('/user/search', {username : username});
export const getAllUserByPrefix = (username) => API.post('/user/search/prefix', {username : username});
//update Post
export const getUsersById = (id) => API.get(`/user/login/details/${id}`);
export const updateProfile = (id, updatedProfile) => API.patch(`/user/login/details/${id}`, updatedProfile);
//Replies
export const postReply = (formData, id) => API.post(`/reply`, formData);
export const deleteReply = (id) => API.delete(`/reply/${id}`, id);
//Blogs
export const postBlog = (formData, id) => API.post(`/blog`, formData);
export const fetchBlogsByUser = (id) => API.get(`/blog/user/${id}`);
export const fetchAllBlogs = () => API.get(`/blog`);

