import React from "react"
import Photo from '../images/cia/cia_photo3.png';

import "./styles/test3.scss"

var photoStyle = {
  backgroundImage: `url(${Photo})`
};

const TestPage3 = () => (
  <div>
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
    <div className="wide-section grid">
      <div className="wide-section__text">
        <h3>01 – Humble beginnings</h3>
        <p>In 2010, Techvibes started the Canadian Startup Awards as a community-nominated and community-voted award program to celebrate the emerging tech innovation taking place across the country. Always with the intention of bringing the flourishing Canadian tech community together, the previously online awards were hosted in the real world for the first time at the Steam Whistle Brewery in 2017. The IRL (In Real Life) awards ceremony and after-party was a huge success but this was only the beginning...</p>
      </div>
      <div className="wide-section__photo">
        <img src={require('../images/cia/cia_photo3.png')}/>
      </div>
      <div className="wide-section__caption caption">As the attendees arrived, a countdown was project on the walls until they were directed to take their seats</div>
    </div>
  </div>
);

export default TestPage3
