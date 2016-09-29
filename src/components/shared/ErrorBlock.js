import React, { Component } from 'react';

export default class ErrorBlock extends Component {

  render() {
    const error = this.props.children;

    return (
      <div>
        { error ?
          <div className="alert alert-danger">
            {error}
          </div>
          : null
        }
      </div>
    );
  }
}
