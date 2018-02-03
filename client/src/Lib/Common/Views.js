import React from 'react';
import { Helmet } from 'react-helmet';

export const PageTitle = ({ ...props }) => {
  const siteName = process.env.REACT_APP_SITE_NAME;
  let { title, customTitle } = props;
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
