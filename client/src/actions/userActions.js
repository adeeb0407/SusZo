import {CONSTANT_TEMPLATE} from '../constants/actionTypes'

export const reduxActionTemplate = (value) => {
    return {type  : CONSTANT_TEMPLATE,
    payload : value};
}