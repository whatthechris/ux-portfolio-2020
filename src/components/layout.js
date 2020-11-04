import React from "react"
import PropTypes from "prop-types"
import { AnimatePresence} from "framer-motion"

/* 
  Where the magic happens ↓
  We use this layout component in gatsby-browser.js to wrap each page
  In this case, we're wrapping all pages in an 'AnimateSharedLayout'
  This enables magic motion layout transitions between pages
*/

const Layout = ({ children}) => {
  return (
    <>
      {/* This wraps all page contents */}
      <AnimatePresence exitBeforeEnter>
        {children}
      </AnimatePresence>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
