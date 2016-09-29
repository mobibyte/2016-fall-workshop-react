import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Login extends Component {

  render() {
    return (
      <form>
        <h1>Login</h1>
        <p className="text-muted">You must be a Mobi Member to login</p>

        <div className="form-group label-floating">
          <label className="control-label">Email</label>
          <input className="form-control" type="email" />
        </div>

        <div className="form-group label-floating">
          <label className="control-label">Password</label>
          <input className="form-control" type="password" />
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
