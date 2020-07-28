/* this file will be used to combine all the reducers */

import { combineReducers } from "redux"; //named import
import courses from './courseReducer'; 

const rootReducer = combineReducers(
    {
        courses:courses
    }
)
export default rootReducer;
   