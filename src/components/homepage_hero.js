import React from "react"

import "./styles/homepage_hero.scss"

const HomepageHero = () => (
  <div className="homepage-hero">
    <div className="homepage-hero__intro">
      <div className="homepage-hero__hello">HELLO</div>
      <h1>I'm Chris Wong</h1>
      <p className="homepage-hero__paragraph">I’m a designer who codes, an animator who illustrates and a life-long learner who teaches. I use this unique combination of skills to create exciting and thoughtful digital experiences focusing on the needs of real people.</p>
      <a href="#footer" className="text-link">Say Hello Back :)</a><p>test</p>
    </div>
    <div className="currently">
      <h5>Currently</h5>
      <ul className="currently__list">
        <li className="currently__item">
          <img src={require('../images/svgs/location-pin.svg')} alt=""/>
          <a href="https://duckduckgo.com/?q=toronto+canada&atb=v187-1&ia=images&iax=images&iai=https%3A%2F%2Fwww.clublexus.com%2Fforums%2Fattachments%2Fcar-chat%2F351235d1420404150-wait-is-over-toronto-canada-map-north-america-2.jpg" className="caption" target="_blank" rel="noopener noreferrer">Toronto, Canada</a>
        </li>
        <li className="currently__item">
          <img src={require('../images/svgs/brief-case.svg')} alt=""/>
          <p className="caption">Looking for oppportunities overseas</p>
        </li>
      </ul>
    </div>
    <div className="homepage-hero__portrait">
      <img src={require('../images/homepage/portrait.jpg')} alt=""/>
    </div>
  </div>
)


export default HomepageHero