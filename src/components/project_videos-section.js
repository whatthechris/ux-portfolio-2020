import React from "react"
import Fade from 'react-reveal/Fade'

import "./styles/project_videos-section.scss"

const VideosSection = props => (
  <div className="videos-section grid">
      <Fade bottom>
        <div className="videos-section__text">
          <h3 className="videos-section__heading">{props.heading}</h3>
          <p>{props.paragraph1}</p><br/>
          <p>{props.paragraph2}</p>
        </div>
      </Fade>
      <Fade bottom>
        <div className="videos-section__container videos-section__container-top">
          <iframe src={props.embed1} width="640" height="852" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          <p className="videos-section__caption caption">{props.caption1}</p>
        </div>
      </Fade>
      <Fade bottom>
        <div className="videos-section__container videos-section__container-middle">
          <iframe src={props.embed2} width="640" height="852" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          <p className="videos-section__caption caption">{props.caption2}</p>
        </div>
      </Fade>
      <Fade bottom>
        <div className="videos-section__container videos-section__container-bottom">
          <iframe src={props.embed3} width="640" height="852" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          <p className="videos-section__caption caption">{props.caption3}</p>
        </div>
      </Fade>
    </div>
)

export default VideosSection