import React, { Component } from 'react';
import ReactLogo from '../../Assets/Images/react-logo.svg';
import { PageTitle } from '../../Lib/Common/Views';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="home-header">
          <img src={ReactLogo} className="home-logo" alt="logo" />
          <PageTitle />
        </header>
      </div>
    );
  }
};
