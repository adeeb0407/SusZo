import {FETCH_USERS_BY_ID, FETCH_USERS, UPDATE_PROFILE, DELETE} from '../constants/actionTypes'

export default (userById = '', action) => {
    switch (action.type) {
        
            case FETCH_USERS_BY_ID:
                return action.payload;
                
            case UPDATE_PROFILE:
                return action.payload;
                       
    
        default: // need this for default case
        return userById 
    }
}