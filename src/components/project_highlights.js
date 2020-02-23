import React from "react"
import ImageZoom from 'react-medium-image-zoom'
import Fade from 'react-reveal/Fade'

import "./styles/project_highlights.scss"

const ProjectHighlights = props => (
  <div className="project-highlights grid">
      <Fade bottom distance="100px">
        <div className="project-highlights__highlight" id="highlight1">
          <img className="project-highlights__icon" src={require(`../images/svgs/${props.icon1}`)} alt=""/>
          <div className="project-highlights__text">
            <h3 className="project-highlights__heading">{props.heading1}</h3>
            <p className="project-highlights__paragraph">{props.paragraph1}</p>
          </div>
        </div>
      </Fade>
      <Fade bottom delay="200" distance="100px">
        <div className="project-highlights__highlight" id="highlight2">
          <img className="project-highlights__icon" src={require(`../images/svgs/${props.icon2}`)} alt=""/>
          <div className="project-highlights__text">
            <h3 className="project-highlights__heading">{props.heading2}</h3>
            <p className="project-highlights__paragraph">{props.paragraph2}</p>
          </div>
        </div>
      </Fade>
      <Fade bottom delay="400" distance="100px">
        <div className="project-highlights__highlight" id="highlight3">
          <img className="project-highlights__icon" src={require(`../images/svgs/${props.icon3}`)} alt=""/>
          <div className="project-highlights__text">
            <h3 className="project-highlights__heading">{props.heading3}</h3>
            <p className="project-highlights__paragraph">{props.paragraph3}</p>
          </div>
        </div>
      </Fade>
  </div>
)

export default ProjectHighlights