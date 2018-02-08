import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Session from '../Helpers/Session';

export const PageTitle = ({ ...props }) => {
  let siteName = process.env.REACT_APP_SITE_NAME;
  let { title, customTitle, appName } = props;

  if (appName) {
    siteName = `${appName} | ${siteName}`;
  }

  let headTitle = customTitle ? title : `${title} | ${siteName}`;

  if (!title) {
    title = siteName;
    headTitle = siteName;
  }

  return (
    <h1 className="page-title">
      <Helmet title={headTitle} />
      {title}
    </h1>
  );
};

export const NavLink = ({ ...props }) => {
  const showNavLink = props.isSignedOut ? Session.isSignedOut() : true;

  return showNavLink ? (
    <li className={navLinkIsActive({ ...props })}>
      <Link to={props.to} onClick={closeNavbar}>{props.title}</Link>
    </li>
  ) : null
};

export const AuthNavLink = ({ ...props }) => {
  return Session.isAuthorised(props.to) ? (
    <li className={navLinkIsActive({ ...props })}>
      <Link to={props.to}>{props.title}</Link>
    </li>
  ) : null;
};

export function viewportDimension() {
  const w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        width = w.innerWidth || e.clientWidth || g.clientWidth,
        height = w.innerHeight||e.clientHeight||g.clientHeight;

  return { width, height };
}

function navLinkIsActive({ ...props }) {
  return props.path === props.to ? 'active' : '';
}

function closeNavbar() {
  const { width } = viewportDimension();

  if (width < 768) {
    document.getElementById('js-navbar-toggle-btn').click();
  }
}
