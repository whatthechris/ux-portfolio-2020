import React from "react"

import "./styles/test2.scss"

const TestPage2 = () => (
  <div className="page-container">
    <div className="responsive-video grid">
      <div className="responsive-video__container responsive-video__container-top">
        <iframe src="https://player.vimeo.com/video/350862568" width="640" height="852" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        <p className="caption">As the attendees were arriving, the nominees were projected on the sides of the crystal. A countdown informed the attendees when to take their seats as the show was about to begin.</p>
      </div>
      <div className="responsive-video__container responsive-video__container-bottom">
        <iframe src="https://player.vimeo.com/video/350860713" width="640" height="852" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        <p className="caption">As the attendees were arriving, the nominees were projected on the sides of the crystal. A countdown informed the attendees when to take their seats as the show was about to begin.</p>
      </div>
    </div>
  </div>
);

export default TestPage2
