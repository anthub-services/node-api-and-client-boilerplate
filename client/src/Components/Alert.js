import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

export default class Basic extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: true
    }

    this.hideAlert = this.hideAlert.bind(this)
  }

  hideAlert() {
    this.setState({ show: false })
  }

  render() {
    if (this.state.show) {
      return this.props.hideDismissButton
        ? <Alert bsStyle={this.props.type}>{this.props.children}</Alert>
        : <Alert bsStyle={this.props.type} onDismiss={this.hideAlert}>{this.props.children}</Alert>
    }

    return null
  }
}
