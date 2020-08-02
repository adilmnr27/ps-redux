import React from "react";
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseAction';
import * as authorActions from '../../redux/actions/authorAction';
import CourseList from './CourseList';
import { Redirect } from "react-router-dom"
import Spinner from "../common/Spinner";

class CoursesPage extends React.Component {
  state = {
    redirectToAddCoursePage: false
  }
  componentDidMount() {

    if (this.props.courses.length === 0) {
      this.props.dispatch(courseActions.loadCourses()).catch(err => { throw err })
    }
    if (this.props.authors.length === 0) {
      this.props.dispatch(authorActions.loadAuthors()).catch(err => { throw err })
    }

  }

  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
        <h2>Courses</h2>
        {this.props.loading ? <Spinner></Spinner> : (
          <>
          <button
            style={{ marginBottom: 20 }}
            className="btn btn-primary add-course"
            onClick={() => this.setState({ redirectToAddCoursePage: true })}

          >Add Course</button>
          <CourseList courses={this.props.courses}></CourseList>
          </>
        )}
      </>
    );

  }
}

function mapStateToProps(state) {
  //here we are passing props to the react component
debugger;
  return {
    courses: state.authors.length === 0 ? [] : state.courses.map(_course => {
      return {
        ..._course,
        authorName: state.authors.find(a => a.id === _course.authorId).name
      }
    }),
    authors: state.authors,
    loading: state.apiStatusCallsInProgress > 0
  }
}

//when we omit mapDispatchToProps dispatcher is automatically added as as action attribute in props
export default connect(mapStateToProps)(CoursesPage);

