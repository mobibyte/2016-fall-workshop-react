import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router';

export default class CourseItem extends Component {
  render() {
    const { id, title, desc, imageUrl, githubUrl } = this.props;

    // Do real image if exists, or placeholder
    const image = (imageUrl) ? imageUrl : 'http://placehold.it/300x300';

    return (
      <div className="course-item well">
        <div
          className="course-item-header"
          style={{backgroundImage: 'url(' + image + ')'}}>
          <span className="course-item-title">{ title }</span>
        </div>
        <div>{ desc }</div>
        <div className="course-item-actions">
          <Link
            className="btn btn-primary"
            to={`/dashboard/courses/${id}`}>
            Get Started
          </Link>
          { githubUrl ?
              <a
                className="btn btn-primary"
                href={githubUrl}
                target="_blank">
                View on GitHub
              </a> : null}
        </div>
      </div>
    );
  }
}

CourseItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  githubUrl: PropTypes.string
}
