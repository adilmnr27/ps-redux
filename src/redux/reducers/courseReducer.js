import actionTypes from "../actions/actionTypes";
//initializing state to an empty array
export default function courseReducer(state = [], action) {
    
    switch (action.type) {
        case actionTypes.CREATE_COURSE:{
            
            /// What i think is going on
            //...state spreading the state state array.
            //...action.course creating a copy of the action..course
            //adding the state objects and action.course in a single array..;like the gather operator
            let stateArray=  [...state, { ...action.course }]
            return stateArray;
        }
            // anything returned from reducer will be the new state
            //please read normalizing state shape for better performance
        default:
            return state; //as other reducer might be using it
    }

}