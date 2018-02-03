import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Site from '../Views/Site';

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <Switch>
          <Route exact path='/' component={Site.Home} />
        </Switch>
      </BrowserRouter>
    );
  }
};
