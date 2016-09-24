import React, { Component } from 'react';

import Navigation from '../components/Navigation';

export default class Dashboard extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          { this.props.children }
        </div>
      </div>
    );
  }
}
