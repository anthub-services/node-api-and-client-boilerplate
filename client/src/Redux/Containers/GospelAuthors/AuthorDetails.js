import React, { Component } from 'react'
import { connect } from 'react-redux'

class AuthorDetails extends Component {
  render() {
    if (!this.props.activeGospelAuthor) {
      return <p>Select an author to view his occupation.</p>
    }

    return (
      <p><strong>Occupation:</strong> {this.props.activeGospelAuthor.occupation}</p>
    )
  }
}

function mapStateToProps({ activeGospelAuthor }) {
  return { activeGospelAuthor }
}

export default connect(mapStateToProps)(AuthorDetails)
