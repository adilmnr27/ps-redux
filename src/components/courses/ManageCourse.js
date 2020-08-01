import React from "react";
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseAction';
import * as authorActions from '../../redux/actions/authorAction';
import PropTypes from "prop-types"

class ManageCourse extends React.Component {

  componentDidMount() {

    if (this.props.courses.length === 0) {
      this.props.loadCourses().catch(err => { throw err })
    }
    if (this.props.authors.length === 0) {
      this.props.loadAuthors().catch(err => { throw err })
    }

  }

  render() {
    return (
      <>
        <h2>Manage Course</h2>
      </>

    );

  }
}

ManageCourse.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.object.isRequired,
  loadAuthors: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  //here we are passing props to the react component

  return {
    courses: state.courses,
    authors: state.authors,
  }
}
/*
loadCourses:bindActionCreators(courseActions.loadCourses,dispatch); 
*/
const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors
}

//when we omit mapDispatchToProps dispatcher is automatically added as as action attribute in props
export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse);

