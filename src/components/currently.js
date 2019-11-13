import React from "react"

import './currently.css'

const Currently = ({ siteTitle }) => (
  <div className="currently">
    <h5>Currently</h5>
    <div className="currently--list">
      <div className="currently--list-item">
        <img src={require('../images/location-pin.svg')} />
        <p className="caption">Toronto, Canada</p>
      </div>
      <div className="currently--list-item">
        <img src={require('../images/brief-case.svg')} />
        <p className="caption">Looking for oppportunities over seas</p>
      </div>
    </div>
  </div>
)

export default Currently
