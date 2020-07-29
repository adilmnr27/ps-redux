import actionTypes from "../actions/actionTypes";
import initialState from './initialState';
//initializing state to an empty array
export default function courseReducer(state = initialState.courses, action) {

    switch (action.type) {
        case actionTypes.CREATE_COURSE: {

            /// What i think is going on
            //...state spreading the state state array.
            //...action.course creating a copy of the action..course
            //adding the state objects and action.course in a single array..;like the gather operator
            let stateArray = [...state, { ...action.course }]
            return stateArray;
        }

        //please read normalizing state shape for better performance

        case actionTypes.LOAD_COURSES_SUCCESS:
            return action.courses;
        // anything returned from reducer will be the new state
        default:
            return state; //as other reducer might be using it
    }

}