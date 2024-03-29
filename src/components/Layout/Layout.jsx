/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import CookieConsent from "react-cookie-consent"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header"
import Footer from "../Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="full-width">
        <main>{children}</main>
        <Footer />
      </div>
      <CookieConsent
        style={{ background: "#e5e7eb", color: "#222" }}
        enableDeclineButton
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-tagmanager"
        buttonClasses="font-bold rounded-lg border-2"
        buttonStyle={{
          borderRadius: "5px",
          backgroundColor: "#479394",
          color: "#fff",
        }}
      >
        This site uses cookies ...
      </CookieConsent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
