/* this file will be used to combine all the reducers */

import { combineReducers } from "redux"; //named import
import courses from './courseReducer'; 
import authors from './authorReducer';
import apiStatusCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers(
    {
        courses:courses,
        authors,
        apiStatusCallsInProgress
    }
)
export default rootReducer;
   