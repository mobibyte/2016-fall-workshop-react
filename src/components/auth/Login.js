import React, { Component } from 'react';
import { Link } from 'react-router';

import { login as attemptLogin } from '../../api/auth';

export default class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

    const email = this.refs.email.value;
    const password = this.refs.password.value;

    attemptLogin(email, password);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <p className="text-muted">You must be a Mobi Member to login</p>

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
