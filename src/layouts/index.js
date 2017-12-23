import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <div className='headerDiv'>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Victor Trofin"
      meta={[
        { name: 'description', content: 'Front end engineer located in Kansai area looking for work' },
        { name: 'keywords', content: 'CV, front end, Kyoto' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
