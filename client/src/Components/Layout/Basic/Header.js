import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { NavLink } from '../../../Lib/Common/Views';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Navbar inverse>
          <Navbar.Header>
            <Link to="/" className="navbar-brand">{process.env.REACT_APP_SITE_NAME}</Link>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <ul className="navbar-nav nav navbar-right">
              <NavLink title="Sign In" to="/sign-in" path={this.props.match.path} />
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
};

export default withRouter(Header);
