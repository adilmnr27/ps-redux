import actionTypes from './actionTypes.js';

export function createCourse(course) {
    return {
        type: actionTypes.CREATE_COURSE,
        course:course
    }
/*object short hand syntax
    return {
        type: actionTypes.CREATE_COURSE,
        course
    }
    */

}