import React from 'react';
import Helmet from 'react-helmet';
import '../styles/index.css';

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Victor Trofin, web engineer in Japan"
      meta={[
        {
          name: 'description',
          content:
            'Web engineer in Kyoto, Japan. Currently at Ship&co, working with Meteor, Vue.js and React',
        },
        { name: 'keywords', content: 'React, Vue.js, Node.js, CV, Kyoto' },
      ]}
    />
    <div className="layout">{children}</div>
  </div>
);

export default Layout;
