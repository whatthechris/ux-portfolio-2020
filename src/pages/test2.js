import React from "react"

import "./styles/test2.scss"

const TestPage2 = () => (
    <div className="highlights">
      <div className="highlights__title">
        <p>Project Highlights</p>
      </div>
      <div className="highlights__text">
        <h3 className="highlights__heading">New year, new venue, new look</h3>
        <p className="highlights__paragraph">After 8 years, the awards were renamed to the Canadian Innovation Awards. Having upgraded the venue to the Royal Ontario Museum, the awards needed a more sophisticated look that mirrored the unique event space. </p>
        <h3 className="highlights__heading">New year, new venue, new look</h3>
        <p className="highlights__paragraph">After 8 years, the awards were renamed to the Canadian Innovation Awards. Having upgraded the venue to the Royal Ontario Museum, the awards needed a more sophisticated look that mirrored the unique event space. </p>
        <h3 className="highlights__heading">New year, new venue, new look</h3>
        <p className="highlights__paragraph">After 8 years, the awards were renamed to the Canadian Innovation Awards. Having upgraded the venue to the Royal Ontario Museum, the awards needed a more sophisticated look that mirrored the unique event space. </p>
      </div>
      <div className="highlights__image-section">
          <img className="highlights__image" src={require('../images/homepage/cia_thumb.png')}/>
        </div>
    </div>
);

export default TestPage2
