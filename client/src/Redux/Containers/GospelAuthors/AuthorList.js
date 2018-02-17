import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectAuthor, toggleAuthor } from '../../Actions/GospelAuthors'
import GospelAuthorsDetails from './AuthorDetails'

class AuthorList extends Component {
  constructor() {
    super()

    this.state = {
      showGospelAuthors: false
    }
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
  return props.gospelAuthors.map((author, index) => {
    return (
      <li
        key={index}
        onClick={() => {
            props.toggleAuthor(index)
            props.selectAuthor(author)
          }
        }
        className={handleClassSelectedItem(props.selectedGospelAuthor, index)}
      >{author.author}</li>
    )
  })
}

function handleClassSelectedItem(selectedAuthor, index) {
  return `list-group-item${selectedAuthor === index ? ' selected' : ''}`
}

function mapStateToProps({ gospelAuthors, selectedGospelAuthor }) {
  return { gospelAuthors, selectedGospelAuthor }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectAuthor, toggleAuthor }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorList)
