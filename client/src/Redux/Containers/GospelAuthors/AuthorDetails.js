import React, { Component } from 'react'
import { connect } from 'react-redux'

class AuthorDetails extends Component {
  render() {
    if (!Object.keys(this.props.activeAuthor).length)
      return <p>Select an author to view his occupation.</p>

    return <p><strong>Occupation:</strong> {this.props.activeAuthor.occupation}</p>
  }
}

function mapStateToProps({ GospelAuthors }) {
  return { activeAuthor: GospelAuthors.activeAuthor }
}

export default connect(mapStateToProps)(AuthorDetails)
