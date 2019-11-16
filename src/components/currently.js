import React from "react"
import '../data/global_styles.scss'

import './styles/currently.scss'

const Currently = ({ siteTitle }) => (
  <div className="currently">
    <h5>Currently</h5>
    <div className="currently--list">
      <div className="currently--list-item">
        <img src={require('../images/svgs/location-pin.svg')} />
        <p className="caption">Toronto, Canada</p>
      </div>
      <div className="currently--list-item">
        <img src={require('../images/svgs/brief-case.svg')} />
        <p className="caption">Looking for oppportunities over seas</p>
      </div>
    </div>
  </div>
)

export default Currently
