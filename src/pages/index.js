import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Currently from "../components/currently"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="homepage--hero">
      <div className="homepage--hero-intro">
        <h1>Hey, I'm Chris Wong</h1>
        <p>I’m a designer that codes, an animator that illustrates and a life-long learner that teaches. Above all I create for people over pixels.</p>
        <Link to="/page-2/">Say Hello :)</Link>
      </div>
      <Currently />
      <div className="homepage--hero-bgvideo">
        {/* 
        <iframe src="https://player.vimeo.com/video/341269351?background=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        */}
      </div> 
    </div>
  </Layout>
)

export default IndexPage
