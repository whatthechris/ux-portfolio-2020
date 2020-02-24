import React from "react"
import Fade from 'react-reveal/Fade'
import Button from "./button.js"

import "./styles/motion-project.scss"

const MotionProject = props => (
  <div className="motion-project grid" id={props.id}>
      <Fade bottom>
        <div className="motion-project__heading">
          <h2>{props.heading}</h2>
          <p className="large-p">{props.subheading}</p>
        </div>
      </Fade>
      <Fade bottom distance="100px">
        <div className={(props.sidebyside ? "motion-project__video motion-project__video-one" : "motion-project__video")}>
        <iframe src={props.embed1} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
      </Fade>
      {props.embed2 &&
        <Fade bottom distance="100px">
          <div className={(props.sidebyside ? "motion-project__video motion-project__video-sidebyside" : "motion-project__video")}>
            <iframe src={props.embed2} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </div>
        </Fade>
      }
      <Fade bottom distance="100px">
        <div className="motion-project__caption caption">
          {props.caption}
        </div>
      </Fade>
      <Fade bottom distance="100px" delay="200">
        <p className="motion-project__paragraph">
          {props.paragraph1}<br/><br/>
          {props.paragraph2}
        </p>
      </Fade>
      <Fade bottom distance="100px" delay="200">
      {props.button_text &&
          <div className="motion-project__button">
            <Button
              button_link={props.button_link}
              button_text={props.button_text}
            />
          </div>
        }
      </Fade>
  </div>
)

export default MotionProject