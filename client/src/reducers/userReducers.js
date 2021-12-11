import {CONSTANT_TEMPLATE} from '../constants/actionTypes'

export const reduxTemplate = (mobileIdStorage = null, action) => {
    switch (action.type) {
        case CONSTANT_TEMPLATE:
            return action.payload;
            
        default: // need this for default case
        return mobileIdStorage 
    }
}