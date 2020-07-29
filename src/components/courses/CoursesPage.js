import React from "react";
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseAction';
import CourseList from './CourseList';

class CoursesPage extends React.Component {

  componentDidMount() {
    
    this.props.dispatch(courseActions.loadCourses()).catch(err => { throw err })
  }

  render() {
    return (
      <>
      <h2>Courses</h2>
      <CourseList courses={this.props.courses}></CourseList>
      </>

    );

  }
}

function mapStateToProps(state) {
  //here we are passing props to the react component
  return {
    courses: state.courses //expose only which is requireed..or react will re render everything
  }
}

//when we omit mapDispatchToProps dispatcher is automatically added as as action attribute in props
export default connect(mapStateToProps)(CoursesPage);

