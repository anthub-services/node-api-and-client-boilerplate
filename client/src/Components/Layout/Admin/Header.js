import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { NavLink } from '../../../Lib/Common/Views';
import Button from '../../Button';
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
            <Navbar.Toggle id="js-navbar-toggle-btn" />
          </Navbar.Header>
          <Navbar.Collapse>
            <ul className="navbar-nav nav navbar-right">
              <NavLink title="Home" to="/" />
              <Button.SignOut />
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
};
