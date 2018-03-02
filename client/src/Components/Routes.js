import React, { Component } from 'react'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import Site from '../Views/Site'
import Admin from '../Views/Admin'
import { SiteRoute, AuthSiteRoute, AdminRoute } from '../Lib/Common/Routes'

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <Switch>
          <SiteRoute exact path="/" component={Site.Home} />
          <SiteRoute exact path="/redux" component={Site.Redux} />
          <SiteRoute exact path="/sign-in" component={Site.SignIn} />
          <AuthSiteRoute exact path="/my-profile" component={Site.MyProfile} />

          <AdminRoute exact path="/admin" component={() => <Redirect to="/admin/dashboard" />} />
          <AdminRoute exact path="/admin/dashboard" component={Admin.Dashboard} />
          <AdminRoute exact path="/admin/settings" component={Admin.Settings} />
          <AdminRoute path="/admin/*" component={Admin.PageNotFound} />

          <SiteRoute path="*" component={Site.PageNotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}
