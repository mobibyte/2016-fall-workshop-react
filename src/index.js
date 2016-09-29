import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

import App from './containers/App';
import Dashboard from './containers/Dashboard';
import Auth from './containers/Auth';

import Login from './components/auth/Login';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';

import Courses from './components/courses/Courses';
import ViewCourse from './components/courses/ViewCourse';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>

      <Route component={Auth}>
        <Route path="/login" component={Login}/>
        <Route path="/forgot-pass" component={ForgotPassword}/>
      </Route>

      <Route path="/dashboard" component={Dashboard}>
        <IndexRedirect to="courses" />
        <Route path="courses" component={Courses}/>
          <Route path="courses/:id" component={ViewCourse}>
            <Route path=":videoId" />
          </Route>
      </Route>

    </Route>
  </Router>
), document.getElementById('root'));
