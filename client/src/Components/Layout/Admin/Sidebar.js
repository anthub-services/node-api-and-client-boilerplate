import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { AuthNavLink } from '../../../Lib/Common/Views';
import Button from '../../Button';

class Sidebar extends Component {
  render() {
    return (
      <nav className="sidebar">
        <ul className="nav nav-sidebar">
          <AuthNavLink title="Dashboard" to="/admin/dashboard" path={this.props.match.path} />
          <AuthNavLink title="Settings" to="/admin/settings" path={this.props.match.path} />
          <Button.SignOut referrer={this.props.match.path} />
        </ul>
      </nav>
    );
  }
};

export default withRouter(Sidebar);
