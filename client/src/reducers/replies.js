import { REPLY_SEND, UPDATE, REPLY_DELETE} from '../constants/actionTypes'

export default (replies = '', action) => {
    switch (action.type) {
        
        case REPLY_SEND:
            return action.payload;
        
        case REPLY_DELETE:
            return action.payload;

        default: // need this for default case
        return replies 
    }
}