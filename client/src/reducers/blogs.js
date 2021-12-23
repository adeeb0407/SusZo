import { BLOG_PUBLISH, BLOG_DELETE, FETCH_BLOGS_BY_USER, FETCH_ALL_BLOGS} from '../constants/actionTypes'

export default (diary = '', action) => {
    switch (action.type) {
        
        case BLOG_PUBLISH:
            return action.payload;
        
        case BLOG_DELETE:
            return action.payload;

        case FETCH_BLOGS_BY_USER:
            return action.payload;

        case FETCH_ALL_BLOGS:
            return action.payload;

        default: // need this for default case
        return diary 
    }
}