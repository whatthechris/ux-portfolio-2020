/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
const React = require("react")
const Layout = require("./src/components/layout").default

// Wraps every page in a component
exports.wrapPageElement = ({ element}) => {
  return <Layout>{element}</Layout>
}
