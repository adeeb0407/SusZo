import { FETCH_USERS_BY_ID, UPDATE, DELETE} from '../constants/actionTypes'

export default (userDataById = [], action) => {
    switch (action.type) {
        
        case FETCH_USERS_BY_ID:
            return action.payload;

        default: // need this for default case
        return userDataById 
    }
}