import React, { Component } from 'react';
import { getToken } from '../utils/auth';

export default class Auth extends Component {

  componentWillMount() {
    // TODO: Expiration
    const token = getToken();
    if(token) {
      this.context.router.push('/dashboard');
    }
  }

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

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
}
