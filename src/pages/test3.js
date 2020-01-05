import React from "react"

import "./styles/test3.scss"

const TestPage3 = () => (
    <div className="highlights2 grid">
      <div className="highlights2__title"><p>Project Highlights</p></div>
      <div className="highlights2__text">
        <h3 className="highlights2__heading">New year, new venue, new look</h3>
        <p className="highlights2__paragraph">After 8 years, the awards were renamed to the Canadian Innovation Awards. Having upgraded the venue to the Royal Ontario Museum, the awards needed a more sophisticated look that mirrored the unique event space. </p>
        <h3 className="highlights2__heading">New year, new venue, new look</h3>
        <p className="highlights2__paragraph">After 8 years, the awards were renamed to the Canadian Innovation Awards. Having upgraded the venue to the Royal Ontario Museum, the awards needed a more sophisticated look that mirrored the unique event space. </p>
        <h3 className="highlights2__heading">New year, new venue, new look</h3>
        <p className="highlights2__paragraph">After 8 years, the awards were renamed to the Canadian Innovation Awards. Having upgraded the venue to the Royal Ontario Museum, the awards needed a more sophisticated look that mirrored the unique event space. </p>
      </div>
      <div className="highlights2__image-section">
          <img className="highlights2__image" src={require('../images/homepage/cia_thumb.png')}/>
        </div>
    </div>
);

export default TestPage3
