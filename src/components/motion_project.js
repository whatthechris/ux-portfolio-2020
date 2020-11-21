import React from "react"
import Button from "./button.js"
import RevealAnimation from "./reveal_animation.js"

import "./styles/motion-project.scss"

const MotionProject = props => (
  <RevealAnimation>
  <div className="motion-project grid" id={props.id}>
        <div className="motion-project__heading">
          <h2>{props.heading}</h2>
          <p>{props.subheading}</p>
        </div>
        <div className={(props.sidebyside ? "motion-project__video motion-project__video-one" : "motion-project__video")}>
        <iframe src={props.embed1} frameborder="0" allow="autoplay; fullscreen" allowfullscreen title="First project video"></iframe>
      </div>
      {props.embed2 &&
          <div className={(props.sidebyside ? "motion-project__video motion-project__video-sidebyside" : "motion-project__video")}>
            <iframe src={props.embed2} frameborder="0" allow="autoplay; fullscreen" allowfullscreen title="Second project video"></iframe>
          </div>
      }
        <div className="motion-project__caption caption">
          {props.caption}
        </div>
        <p className="motion-project__paragraph">
          {props.paragraph1}<br/><br/>
          {props.paragraph2}
        </p>
      {props.button_text &&
          <div className="motion-project__button">
            <Button
              link={props.button_link}
              text={props.button_text}
            />
          </div>
        }
  </div>
  </RevealAnimation>
)

export default MotionProject