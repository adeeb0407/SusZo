import { FETCH_USER_SERCHED, UPDATE, DELETE} from '../constants/actionTypes'

export default (userUrl = '', action) => {
    switch (action.type) {
        
        case FETCH_USER_SERCHED:
            console.log(action.payload)
            return action.payload;

        default: // need this for default case
        return userUrl 
    }
}