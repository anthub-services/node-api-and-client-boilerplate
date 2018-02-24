import React, { Component } from 'react'
import { PageTitle } from '../../Lib/Common/Views'
import SignInForm from '../../Redux/Containers/Sessions/SignIn'

export default class SignIn extends Component {
  render() {
    return (
      <div className="sign-in-view">
        <PageTitle title="Sign In" />
        <SignInForm location={this.props.location} />
      </div>
    )
  }
}
