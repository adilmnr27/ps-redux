import actionTypes from "../actions/actionTypes";
import initialState from './initialState';
//initializing state to an empty array
export default function authorReducer(state = initialState.courses, action) {

    switch (action.type) {
        case actionTypes.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        // anything returned from reducer will be the new state
        default:
            return state; //as other reducer might be using it
    }

}