import {FETCH_USERS_BY_ID, FETCH_USER_BY_PREFIX,FETCH_USERS, UPDATE, DELETE} from '../constants/actionTypes'

export default (users = null, action) => {
    switch (action.type) {
        
        case FETCH_USERS:
            return action.payload;

        case FETCH_USER_BY_PREFIX:
            return action.payload;

        default: // need this for default case
        return users 
    }
}