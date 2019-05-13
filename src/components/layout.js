import React from 'react';
import Helmet from 'react-helmet';
import '../styles/index.css';

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Victor Trofin, web developer in Japan"
      meta={[
        {
          name: 'description',
          content:
            'Web developer in Kyoto, Japan. Currently at Ship&co, working with Meteor and ReactJS',
        },
        { name: 'keywords', content: 'React, Meteor, Node.js, Express, CV, Kyoto' },
      ]}
    />
    <div className="layout">{children}</div>
  </div>
);

export default Layout;
