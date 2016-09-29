import React, { Component } from 'react';
import { Link } from 'react-router';
import ErrorBlock from '../shared/ErrorBlock';

import { login as attemptLogin } from '../../api/auth';

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({error: null});

    const email = this.refs.email.value;
    const password = this.refs.password.value;

    if(email.trim() === '' || password.trim() === '') {
      return this.setState({error: 'Both fields are required'});
    }

    attemptLogin(email, password)
      .then(response => {
        console.log('good');
        console.log(response);
      })
      .catch(e => this.setState({error: e.message}));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <p className="text-muted">You must be a Mobi Member to login</p>

        <ErrorBlock>{this.state.error}</ErrorBlock>

        <div className="form-group label-floating">
          <label className="control-label">Email</label>
          <input className="form-control" type="email" ref="email" />
        </div>

        <div className="form-group label-floating">
          <label className="control-label">Password</label>
          <input className="form-control" type="password" ref="password" />
        </div>

        <input type="submit" value="Login" className="btn btn-primary btn-raised btn-block" />
        <Link
          className="btn btn-block"
          to="/forgot-pass">
          Forgot password?
        </Link>
      </form>
    );
  }
}
