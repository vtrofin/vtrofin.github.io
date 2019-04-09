import React from 'react';
import Helmet from 'react-helmet';
import '../styles/index.css';

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Victor Trofin"
      meta={[
        {
          name: 'description',
          content: 'Front end engineer located in Kansai area looking for work',
        },
        { name: 'keywords', content: 'CV, front end, Kyoto' },
      ]}
    />
    <div
      style={{ margin: '0 auto', maxWidth: 960, padding: '0px 1.0875rem 1.45rem', paddingTop: 0 }}
    >
      {children}
    </div>
  </div>
);

export default Layout;
