import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { NavLink } from '../../../Lib/Common/Views';

class Sidebar extends Component {
  render() {
    return (
      <nav className="sidebar">
        <ul className="nav nav-sidebar">
          <NavLink title="Dashboard" to="/admin/dashboard" path={this.props.match.path} />
          <NavLink title="Settings" to="/admin/settings" path={this.props.match.path} />
          <li>
            <Link to="/sign-in">Sign Out</Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export default withRouter(Sidebar);
