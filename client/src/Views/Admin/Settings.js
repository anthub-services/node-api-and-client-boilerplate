import React, { Component } from 'react'
import { PageTitle } from '../../Lib/Common/Views'

export default class Settings extends Component {
  render() {
    return (
      <div className="settings-view">
        <PageTitle title="Settings" appName="Admin" />
      </div>
    )
  }
}
