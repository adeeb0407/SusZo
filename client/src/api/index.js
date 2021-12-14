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
//
export const getUsers = () => API.get('/user/login/details');
export const searchUser = (username) => API.post('/user/search', {username : username});
//update Post
export const getUsersById = (id) => API.get(`/user/login/details/${id}`);
export const updateProfile = (id, updatedProfile) => API.patch(`/user/login/details/${id}`, updatedProfile);