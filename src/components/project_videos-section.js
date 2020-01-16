import React from "react"

import "./styles/project_videos-section.scss"

const VideosSection = props => (
  <div className="videos-section grid">
      <div 
        className="videos-section__text"
        data-sal="slide-up"
        data-sal-duration="500"
        data-sal-easing="ease"
        >
        <h3 className="videos-section__heading">{props.heading}</h3>
        <p>{props.paragraph1}</p><br/>
        <p>{props.paragraph2}</p>
      </div>
      <div 
        className="videos-section__container videos-section__container-top"
        data-sal="slide-up"
        data-sal-duration="500"
        data-sal-easing="ease"
        >
        <iframe src={props.embed1} width="640" height="852" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        <p className="videos-section__caption caption">{props.caption1}</p>
      </div>
      <div 
        className="videos-section__container videos-section__container-middle"
        data-sal="slide-up"
        data-sal-duration="500"
        data-sal-easing="ease"
        >
        <iframe src={props.embed2} width="640" height="852" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        <p className="videos-section__caption caption">{props.caption2}</p>
      </div>
      <div 
        className="videos-section__container videos-section__container-bottom"
        data-sal="slide-up"
        data-sal-duration="500"
        data-sal-easing="ease"
        >
        <iframe src={props.embed3} width="640" height="852" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        <p className="videos-section__caption caption">{props.caption3}</p>
      </div>
    </div>
)

export default VideosSection