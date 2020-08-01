import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseAction';
import * as authorActions from '../../redux/actions/authorAction';
import PropTypes from "prop-types"
import CourseForm from "./CourseForm";
import { newCourse } from '../../../tools/mockData'
import { saveCourse } from "../../api/courseApi";

function ManageCourse(props) {
  const [course, setCourse] = useState({ ...props.course }) // no need for redux to hold this state
  const [errors, setErrors] = useState({})

  //useeffect will render every time the component renders if we dont declare argument at end '[]'
  useEffect(() => {
    if (props.courses.length === 0) {
      props.loadCourses().catch(err => { throw err })
    } else{
      setCourse({...props.course}) // so that if we directly reload this page , it will populate
    }
    if (props.authors.length === 0) {
      props.loadAuthors().catch(err => { throw err })
    }

  }, [props.course])

  function handleChange(event) {
    //TODO find out what happens when we do not do destructuring
    const { value, name } = event.target; //this destructuring statment avoids the event getting garbage collected
    //so its available within the nested setCourse callback
    /* I wrote it right below like this 
    setCourse({
      ...course,
      [name]:name === "authorId" ? parseInt(value,10):value
    })
 But cory house refrenced the previous state while seeting the new state as shown below/

 I tried to find the reason behind this and found this link
 https://stackoverflow.com/questions/54069253/usestate-set-method-not-reflecting-change-immediately
    */

    setCourse(prevCourse => ({
      ...course,
      [name]: name === "authorId" ? parseInt(value, 10) : value
    }))
  }

  function handleSave(event){
    event.preventDefault();
    props.saveCourse(course).then( ()=> {props.history.push("/courses")})
   
  }



  return (
    <CourseForm course={course} onChange={handleChange} errors={errors} authors={props.authors} onSave={handleSave}></CourseForm>
  );

}


ManageCourse.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

function getCourseBySlug(courses,slug){
 return courses.find(_course=> _course.slug===slug || null )
}

function mapStateToProps(state,ownProps) {
  //here we are passing props to the react component
  const slug = ownProps.match.params.slug;
  const course = slug && state.courses.length>0 ? getCourseBySlug(state.courses,slug):newCourse

  return {
    course:  course,
    courses: state.courses,
    authors: state.authors,
  }
}
/*
loadCourses:bindActionCreators(courseActions.loadCourses,dispatch); 
*/
const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors,
  saveCourse: courseActions.saveCourse
}

//when we omit mapDispatchToProps dispatcher is automatically added as as action attribute in props
export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse);
