import React, { Component } from 'react';

export default class Video extends Component {

  render() {
    const { video } = this.props;

    return (
      <div>
        { video == null ? <div>No video selected</div> :
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              height="560"
              className="embed-responsive-item"
              src={"https://www.youtube.com/embed/" + video }></iframe>
          </div>
        }
      </div>
    );
  }
}
