import React, { Component } from 'react';

export default class Auth extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-md-offset-4 panel text-center auth-box">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
