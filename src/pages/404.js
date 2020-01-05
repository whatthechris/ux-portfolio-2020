import React from "react"

import SEO from "../components/seo"

import Menu from "../components/menu.js"

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <Menu/>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default NotFoundPage
