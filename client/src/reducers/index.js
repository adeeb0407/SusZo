import { combineReducers } from 'redux'
import userReducer from './userReducers'
import users from './fetchUsers'
import userById from './fetchUserById'
import replies from './replies'
import {searchByUsername, id} from './searchUser'
import userUrl from './searchURL'
import diary from './blogs'

export const rootReducer = combineReducers({
    userReducer, 
    userUrl,
    users,
    userById,
    id,
    diary,
    replies,
    searchByUsername,
}) // reduers in main index.js is coming form here