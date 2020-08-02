import actionTypes from './actionTypes.js';
import * as authorApi from "../../api/authorApi";
import { beginApiCall,apiCallError} from "./apiStatusActions";


export function loadAuthorsSuccess(authors) {

    return {
        type: actionTypes.LOAD_AUTHORS_SUCCESS,
        authors
    }
}

/* ASYNC AWAIT WAY OF HANDLING THUNK*/
//https://medium.com/@gaurav5430/async-await-with-redux-thunk-fff59d7be093#:~:text=Redux%2DThunk%20is%20probably%20the%20most%20popular%20middleware%20used,making%20asynchronous%20requests%20from%20redux.&text=For%20converting%20the%20above%20code,mark%20the%20function%20as%20async.
export function loadAuthors() {
    
    return async function (dispatch) {
        dispatch(beginApiCall());
        try {
            const authors = await authorApi.getAuthors();
            dispatch(loadAuthorsSuccess(authors))
        } catch (error) {
            dispatch(apiCallError())
            throw error
          
        }
        return 'done';

    }
}