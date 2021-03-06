import actionTypes from './actionTypes.js';
import * as courseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusActions"

export function createCourse(course) {
    return {
        type: actionTypes.CREATE_COURSE,
        course: course
    }
}
/*object short hand syntax
    return {
        type: actionTypes.CREATE_COURSE,
        course
    }
    */
export function loadCoursesSuccess(courses) {

    return {
        type: actionTypes.LOAD_COURSES_SUCCESS,
        courses: courses
    }
}

export function loadCourses() {
    //thunk middleware passes disaptch and getState as an argument.
    // Hence the inner function is going to get dispatch as the argument
    return function (dispatch, getState) {

        dispatch(beginApiCall()); //we want to increment the value of no of calls;
        return courseApi.getCourses()
            .then(courses => {

                dispatch(loadCoursesSuccess(courses))
            })
            .catch(err => {
                dispatch(apiCallError())
                throw err
            })
    }
}

export function saveCourse(course) {

    return (dispatch) => {
        dispatch(beginApiCall());
        return courseApi.saveCourse(course).then((savedCourse) => {
            course.id
                ? dispatch(updateCourseSuccess(savedCourse))
                : dispatch(saveCourseSuccess(savedCourse))
        }).catch(err => {
            console.log(err)
            dispatch(apiCallError())
            throw err;
        })
    }
}

export function saveCourseSuccess(course) {
    return {
        type: actionTypes.CREATE_COURSE_SUCCESS,
        course
    }
}

export function updateCourseSuccess(course) {
    return {
        type: actionTypes.UPDATE_COURSE_SUCCESS,
        course
    }
}