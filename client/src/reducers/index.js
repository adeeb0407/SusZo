import { combineReducers } from 'redux'
import userReducer from './userReducers'
import users from './fetchUsers'
import userById from './fetchUserById'
import {searchByUsername, id} from './searchUser'

export const rootReducer = combineReducers({
    userReducer, 
    users,
    userById,
    id,
    searchByUsername,
}) // reduers in main index.js is coming form here