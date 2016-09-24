import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import CourseItem from './CourseItem';

import { getAllCourses } from '../../api/courses';

import '../../styles/Course.scss';

export default class Courses extends Component {

  constructor(props) {
    super(props);

    this.state = {
      courses: null
    }

    this.updateList();
  }

  updateList = () => {
    getAllCourses().then(c => {
      this.setState({ courses: c });
    });
  }

  render() {
    const { courses } = this.state;

    let courseBlock = <div>Loading</div>;
    if(courses) {
      courseBlock = courses.map(item => (
        <Col sm={6} key={item._id}>
          <CourseItem
            id={item.permalink}
            title={item.title}
            desc={item.description}
            imageUrl={item.imageUrl}
            githubUrl={item.githubUrl} />
        </Col>
      ));
    }

    return (
      <div>
        <h2>Courses</h2>
        <Row>{ courseBlock }</Row>
      </div>
    );
  }
}
