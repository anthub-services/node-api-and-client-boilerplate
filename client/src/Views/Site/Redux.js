import React, { Component } from 'react'
import { PageTitle } from '../../Lib/Common/Views'
import GospelAuthorsList from '../../Redux/Containers/GospelAuthors/AuthorList'

export default class Redux extends Component {
  render() {
    return (
      <div className="redux-view">
        <PageTitle title="Redux" />
        <p>Managing React states in the component and Redux.</p>
        <div className="col-sm-5 no-padding">
          <GospelAuthorsList />
        </div>
      </div>
    )
  }
}
