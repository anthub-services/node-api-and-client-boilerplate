import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Layout from '../../Components/Layout'
import PageNotFound from '../../Views/Admin/PageNotFound'
import * as Session from '../Helpers/Session'

export const SiteRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={props => (
      <Layout.Basic>
        <Component {...props} />
      </Layout.Basic>
    )} />
  )
}

export const AuthSiteRoute = ({component: Component, ...rest}) => {
  const { path } = {...rest}
  let component = <Component {...rest} />

  if (Session.isSignedIn() && Session.accessDenied(path)) {
    console.log(`[path: ${path}] Access denied!`)
    component = <PageNotFound {...rest} />
  }

  const layout = <Layout.Basic>{component}</Layout.Basic>

  return <PrivateRoute {...rest} layout={layout} />
}

export const AdminRoute = ({component: Component, ...rest}) => {
  const { path } = {...rest}
  let component = <Component {...rest} />

  if (path && path !== '/admin/*' && Session.isSignedIn() && Session.accessDenied(path)) {
    console.log(`[path: ${path}] Access denied!`)
    component = <PageNotFound {...rest} />
  }

  const layout = <Layout.Admin>{component}</Layout.Admin>

  return <PrivateRoute {...rest} layout={layout} />
}

const PrivateRoute = ({component: Component, ...rest}) => {
  const { layout } = {...rest}

  if (Session.token()) Session.verifyToken()

  return (
    <Route {...rest} render={(props) => (
      Session.isSignedIn() ? layout : redirectToSignInPage(props)
    )} />
  )
}

function redirectToSignInPage(props) {
  return (
    <Redirect to={{
      pathname: '/sign-in',
      state: { from: props.location }
    }} />
  )
}
