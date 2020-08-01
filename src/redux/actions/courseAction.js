import actionTypes from './actionTypes.js';
import * as courseApi from "../../api/courseApi";

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

        return courseApi.getCourses()
            .then(courses => {

                dispatch(loadCoursesSuccess(courses))
            })
            .catch(err => {

                throw err
            })
    }
}

export function saveCourse(course) {
    return (dispatch) => {
        return courseApi.saveCourse(course).then(
            course.id 
            ? dispatch(updateCourseSuccess(course)) 
            : dispatch(saveCourseSuccess(course))
        ).catch(err => { console.log(err) })
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