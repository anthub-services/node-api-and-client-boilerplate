import React, { Component } from 'react';
import * as Session from '../../Lib/Helpers/Session';

export default class SignOut extends Component {
  render() {
    if (Session.isSignedIn()) {
      return (
        <li>
          <button className="sign-out-btn" onClick={Session.signOut}>Sign Out</button>
        </li>
      );
    }

    return null;
  }
};
