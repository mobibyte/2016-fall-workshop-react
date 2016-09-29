import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ForgotPassword extends Component {

  render() {
    return (
      <form>
        <h1>Forgot Password</h1>
        <p className="text-muted">We'll send you a reset link to your email</p>

        <div className="form-group label-floating">
          <label className="control-label">Email</label>
          <input className="form-control" type="email" />
        </div>

        <input type="submit" value="Reset" className="btn btn-primary btn-raised btn-block" />
        <Link
          className="btn btn-block"
          to="/login">
          Nevermind
        </Link>
      </form>
    );
  }
}
