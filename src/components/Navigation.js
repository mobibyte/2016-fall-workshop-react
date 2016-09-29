import React, { Component } from 'react';
import {
  Navbar, Nav, NavItem,
  NavDropdown, MenuItem
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';

export default class Navigation extends Component {

  render() {
    const { onLogout } = this.props;

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/dashboard">Mobi</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/dashboard/courses">
              <NavItem eventKey={1}>Courses</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavDropdown eventKey={3} title="Hi, Cameron" id="dropdown-account">
              <MenuItem eventKey={3.1}>My Account</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3} onClick={onLogout}>Logout</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
