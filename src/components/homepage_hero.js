import React from "react"
import { Link } from "gatsby"

import "./styles/homepage_hero.scss"
import Currently from "./currently"

const HomepageHero = () => (
    <div className="homepage--hero">
      <div className="homepage--hero-intro">
        <h1>Hey, I'm Chris Wong</h1>
        <p>I’m a designer that codes, an animator that illustrates and a life-long learner that teaches. Above all I create for people over pixels.</p>
        <Link to="/page-2/" className="text-link">Say Hello :)</Link>
      </div>
      <Currently />
      <div className="bgvideo">
        {/* 
        <iframe src="https://player.vimeo.com/video/341269351?background=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        */}
      </div> 
    </div>
)

export default HomepageHero