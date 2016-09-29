import React, { Component } from 'react';
import { clearLogin, getToken } from '../utils/auth';

import Navigation from '../components/Navigation';

export default class Dashboard extends Component {

  componentWillMount = () => {
    const token = getToken();
    if(token === null) {
      this.context.router.push('/login');
    }
  }

  onLogout = () => {
    clearLogin();
    this.context.router.push('/login');
  }

  render() {
    return (
      <div>
        <Navigation onLogout={this.onLogout}  />
        <div className="container">
          { this.props.children }
        </div>
      </div>
    );
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
}
