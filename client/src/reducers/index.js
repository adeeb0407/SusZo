import { combineReducers } from 'redux'
import userReducer from './userReducers'
import users from './fetchUsers'
import userById from './fetchUserById'
import replies from './replies'
import {searchByUsername, id} from './searchUser'
import userUrl from './searchURL'

export const rootReducer = combineReducers({
    userReducer, 
    userUrl,
    users,
    userById,
    id,
    replies,
    searchByUsername,
}) // reduers in main index.js is coming form here