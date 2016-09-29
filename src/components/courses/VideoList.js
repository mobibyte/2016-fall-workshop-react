import React, { Component } from 'react';
import { Link } from 'react-router';

export default class VideoList extends Component {

  render() {
    const { videos, course } = this.props;
    return (
      <div>
        { videos.map((item, i) => (
          <Link
            key={item.id}
            to={`/dashboard/courses/${course.permalink}/${i + 1}`}>
              <div className="video-number">
                {i + 1}
              </div>
             {item.title}
            <div className="ripple-container"></div>
          </Link>
        )) }
      </div>
    );
  }
}
