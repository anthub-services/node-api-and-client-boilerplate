import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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
  const isActive = props.path === props.to ? 'active' : '';

  return (
    <li className={isActive}>
      <Link to={props.to}>{props.title}</Link>
    </li>
  );
};
