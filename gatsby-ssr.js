/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react")
const Layout = require("./src/components/layout").default

// Wraps every page in a component (while building too)
exports.wrapPageElement = ({ element, props }) => {
  return <Layout>{element}</Layout>
}
