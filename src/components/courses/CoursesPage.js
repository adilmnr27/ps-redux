import React from "react";
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseAction'

class CoursesPage extends React.Component {
  state = {
    course: {
      title: ""
    }
  }

  handleChange(event) {
    
    const course = {
      ...this.state.course,
      title: event.target.value
    }
    this.setState({ course: course })
  }

  handleSubmit=event=>{
      event.preventDefault();
      this.props.dispatch(courseActions.createCourse(this.state.course));
      //as mapDispatchtoProps is omitted, dispatch automatically became a property of props
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}> 
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input type="text"
          onChange={this.handleChange.bind(this)}
          value={this.state.course.title}></input>
          <input type="submit" value="save"></input>

          {
            this.props.courses.map(_course=>{
            return <h3 key={_course.title}>{_course.title}</h3>
            })
          }
      </form>


    );

  }
}

function mapStateToProps(state){
  //here we are passing props to the react component
  return {
    courses:state.courses //expose only which is requireed..or react will re render everything
  }
}

//when we omit mapDispatchToProps dispatcher is automatically added as as action attribute in props
export default connect(mapStateToProps)(CoursesPage);
