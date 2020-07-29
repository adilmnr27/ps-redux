import actionTypes from "../actions/actionTypes";
//initializing state to an empty array
export default function authorReducer(state = [], action) {

    switch (action.type) {
        case actionTypes.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        // anything returned from reducer will be the new state
        default:
            return state; //as other reducer might be using it
    }

}