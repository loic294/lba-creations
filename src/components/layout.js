import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import './layout.css'

// window.oncontextmenu = function (e) {
//   if (!["INPUT", "TEXTAREA", "BUTTON", "A"].includes(e.target.tagName))
//     return false;
// }

// window.onmousedown = function (e) {
//   if (!["INPUT", "TEXTAREA", "BUTTON", "A"].includes(e.target.tagName))
//     e.preventDefault();
// }

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Développeur, photographe & étudiant basé à Montréal, CA. Je travaille présentement pour Microsoft.' },
            { name: 'keywords', content: 'web design, web development, photography, montreal, canada, microsoft intern' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          ]}
          link={[
            { href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,900', rel: 'stylesheet' }
          ]}
        >
          <html lang="en" />
        </Helmet>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
