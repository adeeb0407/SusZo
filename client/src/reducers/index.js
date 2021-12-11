import { combineReducers } from 'redux'
import userReducer from './userReducers'
import users from './fetchUsers'

export const rootReducer = combineReducers({
    userReducer, 
    users,
}) // reduers in main index.js is coming form here