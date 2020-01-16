import React from "react"

import "./styles/motion-project.scss"

const MotionProject = props => (
  <div className="motion-project grid">
      <div className="motion-project__heading"
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-easing="ease">
        <h2>{props.heading}</h2>
        <p className="large-p">{props.subheading}</p>
      </div>
      <div className={(props.embed2 ? "motion-project__video motion-project__video-one" : "motion-project__video")}
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-easing="ease">
        <iframe src={props.embed1} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
      {props.embed2 &&
      <div className="motion-project__video motion-project__video-two"
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-easing="ease">
        <iframe src={props.embed2} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
      }
      <div className="motion-project__caption caption"
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-easing="ease">{props.caption}</div>
      <p className="motion-project__paragraph"
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-easing="ease">
        {props.paragraph1}<br/><br/>
        {props.paragraph2}
      </p>
  </div>
)

export default MotionProject