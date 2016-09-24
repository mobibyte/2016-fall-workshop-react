import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

import App from './containers/App';
import Dashboard from './containers/Dashboard';
import Auth from './containers/Auth';

import Login from './components/auth/Login';
import ResetPassword from './components/auth/ResetPassword';

import Courses from './components/courses/Courses';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>

      <Route component={Auth}>
        <Route path="/login" component={Login}/>
        <Route path="/forgot-password" component={ResetPassword}/>
      </Route>

      <Route path="/dashboard" component={Dashboard}>
        <IndexRedirect to="courses" />
        <Route path="courses" component={Courses}/>
      </Route>

    </Route>
  </Router>
), document.getElementById('root'));
