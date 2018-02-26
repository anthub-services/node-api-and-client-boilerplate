import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Axios from '../../Lib/Common/Axios'
import * as Session from '../../Lib/Helpers/Session'
import { closeNavbar } from '../../Lib/Common/Views'

export default class SignOut extends Component {
  signOut() {
    Axios
      .post(process.env.REACT_APP_API_SIGN_OUT_URL)
      .then(response => {
        Session.deleteToken()
        closeNavbar()
        this.props.auth(false)
      })
  }

  render() {
    const props = this.props

    if (props.IsSignedIn) {
      return (
        <li>
          <button className="sign-out-btn" onClick={this.signOut.bind(this)}>Sign Out</button>
        </li>
      )
    }

    if (['*', '/admin/*'].indexOf(props.referrer) > -1) {
      return null
    }

    return <Redirect to={props.referrer} />
  }
}
