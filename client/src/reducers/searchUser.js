import {SEARCH_USER, FETCH_USER_SERCHED, FETCH_USER_BY_PREFIX,FETCH_USERS_BY_ID, CAPTURE_ID} from '../constants/actionTypes'

export const searchByUsername = (username = null, action) => {
    switch (action.type) {
        case SEARCH_USER:
            return action.payload;

        case FETCH_USER_BY_PREFIX:
            return action.payload;
        
        default: // need this for default case
        return username 
    }
}
export const id = (id = null, action) => {
    switch (action.type) {
        case CAPTURE_ID:
            return action.payload;
            
        default: // need this for default case
        return id 
    }
}