import {FETCH_USERS_BY_ID, FETCH_USERS, UPDATE, DELETE} from '../constants/actionTypes'

export default (users = [], action) => {
    switch (action.type) {
        
        case FETCH_USERS:
            return action.payload;

        default: // need this for default case
        return users 
    }
}