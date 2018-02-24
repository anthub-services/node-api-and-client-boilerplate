import React, { Component } from 'react'
import { PageTitle } from '../../Lib/Common/Views'

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-view">
        <PageTitle title="Dashboard" appName="Admin" />
      </div>
    )
  }
}
