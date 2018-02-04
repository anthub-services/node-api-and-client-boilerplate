import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../../Components/Layout';
import * as Session from '../Helpers/Session';

export const SiteRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={props => (
      <Layout.Basic>
        <Component {...props} />
      </Layout.Basic>
    )} />
  );
};

export const AdminRoute = ({component: Component, ...rest}) => {
  const layout = (
    <Layout.Admin>
      <Component {...rest} />
    </Layout.Admin>
  );

  return <PrivateRoute {...rest} layout={layout} />;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { path, layout } = { ...rest };

  Session.verifyToken();

  if (path && Session.isSignedIn() && Session.accessDenied(path)) {
    console.log(`[path: ${path}] Access denied!`)
    return <Redirect to="/" />;
  }

  return (
    <Route {...rest} render={(props) => (
      Session.isSignedIn() ? layout : redirectToSignInPage(props)
    )} />
  );
};

function redirectToSignInPage(props) {
  return  (
    <Redirect to={{
      pathname: '/sign-in',
      state: { from: props.location }
    }} />
  );
}
