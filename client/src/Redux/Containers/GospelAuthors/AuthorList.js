import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectAuthor } from '../../Actions/GospelAuthors'
import GospelAuthorsDetails from './AuthorDetails'

const GOSPEL_AUTHORS = [
  {
    author: 'Matthew',
    occupation: 'Doctor'
  },{
    author: 'Mark',
    occupation: 'Fisherman'
  },{
    author: 'Luke',
    occupation: 'Tax Collector'
  },{
    author: 'John',
    occupation: 'Fisherman'
  }
]

class AuthorList extends Component {
  constructor() {
    super()

    this.state = { showGospelAuthors: false }
  }

  toggleGospelAuthors() {
    const state = !this.state.showGospelAuthors

    this.setState({ showGospelAuthors: state })
  }

  render() {
    return (
      <div className="gospel-authors">
        <p>
          <ToggleButton
            onClick={this.toggleGospelAuthors.bind(this)}
            showGospelAuthors={this.state.showGospelAuthors}
          />
        </p>
        <hr />
        {this.state.showGospelAuthors &&
          <div>
            <h2 className="page-title-sub">Gospel Authors</h2>
            <GospelAuthorsDetails />
            <ul className="list-group">
              <AuthorListItems {...this.props} />
            </ul>
          </div>
        }
      </div>
    )
  }
}

const ToggleButton = ({ onClick, showGospelAuthors }) => {
  const buttonStateTitle = showGospelAuthors ? 'Hide' : 'Show'

  return <button onClick={onClick} className="btn btn-primary">{buttonStateTitle} Gospel Authors</button>
}

const AuthorListItems = ({...props}) => {
  return GOSPEL_AUTHORS.map((author, index) => {
    return (
      <li
        key={index}
        onClick={() => {
            props.selectAuthor(author, index, props)
          }
        }
        className={handleClassSelectedItem(props.GospelAuthors.selectedAuthor, index)}
      >{author.author}</li>
    )
  })
}

function handleClassSelectedItem(selectedAuthor, index) {
  return `list-group-item${selectedAuthor === index ? ' selected' : ''}`
}

function mapStateToProps({ GospelAuthors }) {
  return { GospelAuthors }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectAuthor }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorList)
