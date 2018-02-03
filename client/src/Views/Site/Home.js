import React, { Component } from 'react';
import ReactLogo from '../../Assets/Images/react-logo.svg';
import { PageTitle } from '../../Lib/Common/Views';

export default class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <header className="home-page-header">
          <img src={ReactLogo} className="home-page-logo" alt="React Logo" />
          <PageTitle />
        </header>
      </div>
    );
  }
};
