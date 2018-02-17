import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import JWT from 'jsonwebtoken'
import Form from 'react-jsonschema-form'
import Alert from '../Alert'
import Axios from '../../Lib/Common/Axios'
import * as FormHelper from '../../Lib/Helpers/Form'
import * as Session from '../../Lib/Helpers/Session'

export default class SignIn extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      key: Date.now(),
      formData: initFormData,
      alertMessage: {},
      showAlertMessage: false,
      isSigningIn: false,
      isSignedIn: Session.isSignedIn(),
      redirect: { url: '/' },
      locationState:  props.location.state
    }
  }

  onSubmit({ formData }) {
    this.setState({
      key: Date.now(),
      formData: formData,
      alertMessage: {
        type: 'info',
        message: 'Signing in...'
      },
      isSigningIn: true,
      showAlertMessage: true
    })

    const token = JWT.sign(formData, process.env.REACT_APP_API_JWT_SECRET)

    Axios
      .post(process.env.REACT_APP_API_SIGN_IN_URL, { token })
      .then(response => {
        const { token, redirect } = response.data

        Session.store({ token })

        this.setState({
          alertMessage: {
            type: 'success',
            message: 'Redirecting...'
          },
          redirect: redirect ? redirect : this.state.redirect
        })

        if (!this.state.locationState && redirect && redirect.external) {
          return window.location.href = redirect.url
        }

        const _this = this

        setTimeout(function(){
          _this.setState({
            formData: initFormData,
            isSignedIn: true,
            isSigningIn: false
          })
        }, 500)
      })
      .catch(error => {
        let message  = 'Unable to process your request. Please check your internet connection. If problem persists, contact support.'

        if (error.response && error.response.data.message) {
          message = error.response.data.message
        }

        console.log('Error: ', error)

        this.setState({
          alertMessage: {
            type: 'danger',
            message: message
          },
          showAlertMessage: true,
          isSigningIn: false
        })
      })
  }

  render() {
    if (this.state.isSignedIn) {
      const referrer = this.state.locationState
        ? this.state.locationState.from.pathname
        : this.state.redirect.url

      return <Redirect to={referrer} />
    }

    return (
      <div className="form-wrapper">
        {this.state.showAlertMessage &&
          <Alert type={this.state.alertMessage.type} hideDismissButton>
            <p>{this.state.alertMessage.message}</p>
          </Alert>
        }
        <Form
          className="form"
          autocomplete="off"
          key={this.state.key}
          formData={this.state.formData}
          schema={Schema}
          uiSchema={UISchema}
          validate={validate}
          ErrorList={FormHelper.errorList}
          onSubmit={this.onSubmit}
        >
          <button
            type="submit"
            className="btn btn-primary form-control"
            disabled={this.state.isSigningIn}
          >
            Sign In
          </button>
        </Form>
      </div>
    )
  }
}

const initFormData = {
  email: '',
  password: ''
}

const Schema = {
  'type': 'object',
  'properties': {
    'email': {
      'type': 'string',
      'title': 'Email'
    },
    'password': {
      'type': 'string',
      'title': 'Password'
    }
  }
}

const UISchema = {
  'ui:rootFieldId': 'log_in',
  'email': {
    'ui:widget': 'email',
    'ui:autofocus': true,
    'ui:placeholder': 'Enter your email'
  },
  'password': {
    'ui:widget': 'password',
    'ui:placeholder': 'Enter your password'
  }
}

function validate(formData, errors) {
  let input

  if (formData.email === undefined || formData.email === '') {
    errors.email.addError('Email is required.')
    input = 'email'
  }

  if (formData.password === undefined || formData.password === '') {
    errors.password.addError('Password is required.')
    input = input || 'password'
  }

  FormHelper.setFocus(UISchema, input)

  return errors
}
