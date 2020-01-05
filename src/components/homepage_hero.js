import React from "react"
import { Link } from "gatsby"

import "./styles/homepage_hero.scss"

const HomepageHero = () => (
  <div className="homepage-hero">
    <div className="homepage-hero__intro">
      <div className="homepage-hero__hello">HELLO</div>
      <h1>I'm Chris Wong</h1>
      <p>I’m a designer that codes, an animator that illustrates and a life-long learner that teaches. Above all I create for people over pixels.</p>
      <a href="#footer" className="text-link">Say Hello Back :)</a>
    </div>
    <div className="currently">
      <h5>Currently</h5>
      <div className="currently__list">
        <div className="currently__item">
          <img src={require('../images/svgs/location-pin.svg')} />
          <p className="caption">Toronto, Canada</p>
        </div>
        <div className="currently__item">
          <img src={require('../images/svgs/brief-case.svg')} />
          <p className="caption">Looking for oppportunities overseas</p>
        </div>
      </div>
    </div>
  </div>
)


export default HomepageHero