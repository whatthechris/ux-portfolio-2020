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
          <a href="https://www.google.ca/search?q=toronto+canada&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjm3diPx-XnAhXTjp4KHWkIAagQ_AUoAnoECBoQBA&biw=1440&bih=798" className="caption" target="_blank" rel="noopener noreferrer">Toronto, Canada</a>
        </div>
        <div className="currently__item">
          <img src={require('../images/svgs/brief-case.svg')} />
          <p className="caption">Looking for oppportunities overseas</p>
        </div>
      </div>
    </div>
    <div className="homepage-hero__portrait">
      <img src={require('../images/homepage/portrait.jpg')} />
    </div>
  </div>
)


export default HomepageHero