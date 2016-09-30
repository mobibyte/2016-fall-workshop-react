import React, { Component } from 'react';
import { Link } from 'react-router';
import  { isValidEmail }  from '../../utils/validate';
import { forgotPasswordRequest } from '../../api/auth';

import ErrorBlock from '../shared/ErrorBlock';

export default class ForgotPassword extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.setState({error:""});
  }
  handleSubmit(e){
    e.preventDefault();
    this.setState({ error: null });

    const valid = isValidEmail(this.refs.email.value);
    console.log(valid);
    if (!valid){
      this.setState({error: "Please enter valid email"});
    } else {
      forgotPasswordRequest( this.refs.email.value)
      .then(() => this.setState({message: "Email successfully sent"}))
      .catch(err => this.setState({error: err.message}));
    }
  }

  
  render() {
    return (
      <form>
        <h1>Forgot Password</h1>
        <span className="text-muted"> We'll send you a reset link to your email </span>
        <ErrorBlock>{this.state.error}</ErrorBlock>
        { this.state.message &&
        <div className="alert alert-success">{this.state.message}</div>
        }
        <div className="form-group label-floating">
          <label className="control-label">Email</label>
          <input className="form-control" type="email" ref="email" />
        </div>

        <input 
        type="submit" 
        onClick={this.handleSubmit.bind(this)} 
        value="Reset" 
        className="btn btn-primary btn-raised btn-block" 
        />
        <Link
          className="btn btn-block"
          to="/login">
          Nevermind
        </Link>
      </form>
    );
  }
}
