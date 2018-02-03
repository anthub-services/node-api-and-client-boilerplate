import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactLogo from '../../../Assets/Images/react-logo.svg';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <Navbar inverse className="navbar-fixed-top">
          <Navbar.Header>
            <Link to="/admin/dashboard" className="navbar-brand">
              <img src={ReactLogo} className="navbar-brand-logo" alt="React Logo" />
              <span className="text">Admin</span>
            </Link>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <ul className="navbar-nav nav navbar-right">
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
};
