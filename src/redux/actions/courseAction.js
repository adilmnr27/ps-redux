

export function createCourse(course) {
    return {
        type: "CREATE_COURSE",
        course:course
    }
/*object short hand syntax
    return {
        type: actionTypes.CREATE_COURSE,
        course
    }
    */

}