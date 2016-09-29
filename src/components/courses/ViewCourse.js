import React, { Component } from 'react';
import { getCourse } from '../../api/courses';

import Video from './Video';
import VideoList from './VideoList';

export default class ViewCourse extends Component {

  constructor(props) {
    super(props);

    this.state = {
      course: null,
      videos: null
    }

    getCourse(this.props.params.id).then(json => {
      this.setState({ course: json.course, videos: json.videos });
    });
  }

  render() {
    let content = <div>Insert cool loading animation here</div>
    const { videos, course } = this.state;
    const videoId = this.props.params.videoId || 1;
    const selectedVideo = (videos === null) ? null : videos[videoId - 1].videoId;

    if(course !== null && videos !== null) {
      content = (
        <div>
          <div className="row"><h3>{course.title}</h3></div>
          <div className="row">
            <div className="col-md-3 panel no-pad">
              <VideoList course={course} videos={videos} />
            </div>

            <div className="col-md-offset-1 col-md-8 panel no-pad">
              <Video video={selectedVideo} />
            </div>
          </div>
        </div>
      )
    }

    return content;
  }
}
