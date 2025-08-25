import React from 'react'
import { Helmet } from "react-helmet";

const PageSeo = ({ title, description, keywords }) => {
  const siteName = "SustainaBite";
  return (
    <Helmet>
      <title>{siteName} | {title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
}

export default PageSeo
