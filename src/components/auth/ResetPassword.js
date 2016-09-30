import React, { Component, PropTypes} from 'react';
import { ErrorBlock } from '../shared/ErrorBlock';
import { Link } from 'react-router';
import { isValidPassword } from '../../utils/validate';
import { resetPasswordRequest } from '../../api/auth';
export default class ResetPassword extends Component {
  constructor(props){
      super(props);
  }
  componentWillMount(){
    this.setState({error: ""});
  }
  handleSubmit(e){
    e.preventDefault();
    const password = this.refs.password.value;
    const confirmPassword = this.refs.confirmPassword.value;
    const token = this.props.params.token;
    const valid = isValidPassword(password) &&
                  isValidPassword(confirmPassword) &&
                  confirmPassword === password;
    if (valid){
      resetPasswordRequest(token,password)
      .then((data) => {
        this.setState({message: "Your password has been reset!"});
        setTimeout(()=>{
           this.context.router.push('/dashboard');  
        },2000);
      })
      .catch(err => { 
        this.setState({error: err.message});
        console.log(err.message);
      });
    } else {
      this.setState({error: "New passwords are not matched or invalid"});
    }
    console.log(this.state);
    console.log(valid);
  }
  
  render() {
    return (
       <form>
        <h1>Reset Password</h1>
          {this.state.message && 
          <div className="alert alert-success">{this.state.message}</div>
          }
         {this.state.error && 
                <div className="alert alert-danger">{this.state.error}</div>
  
        }
        <div className="form-group label-floating">
          <label className="control-label">New password</label>
          <input className="form-control" type="password" ref="password" />
        </div>
        <div className="form-group label-floating">
          <label className="control-label">New password confirm</label>
          <input className="form-control" type="password" ref="confirmPassword" />
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
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };
}
