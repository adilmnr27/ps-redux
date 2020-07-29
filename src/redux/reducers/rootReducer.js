/* this file will be used to combine all the reducers */

import { combineReducers } from "redux"; //named import
import courses from './courseReducer'; 
import authors from './authorReducer';

const rootReducer = combineReducers(
    {
        courses:courses,
        authors
    }
)
export default rootReducer;
   