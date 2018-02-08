import React, { Component } from 'react';
import Axios from '../../Lib/Common/Axios';
import * as Session from '../../Lib/Helpers/Session';

export default class SignOut extends Component {
  signOut() {
    Axios
      .post(process.env.REACT_APP_API_SIGN_OUT_URL)
      .then(response => {
        Session.deleteToken();

        const referrer = this.props.referrer.split('/')[1];

        if (referrer === 'admin') {
          window.location.reload();
        } else {
          window.location.href = '/sign-in';
        }
      });
  }

  render() {
    if (Session.isSignedIn()) {
      return (
        <li>
          <button className="sign-out-btn" onClick={this.signOut.bind(this)}>Sign Out</button>
        </li>
      );
    }

    return null;
  }
};
