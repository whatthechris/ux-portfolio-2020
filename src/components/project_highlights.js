import React from "react"
import Fade from 'react-reveal/Fade'

import "./styles/project_highlights.scss"

const ProjectHighlights = props => (
  <Fade bottom distance="100px">
    <div className="project-highlights">
      <div className="project-highlights__text">
        <h4>Project Highlights</h4>
        <div className="project-highlights__highlight">
          <img className="project-highlights__icon" src={require(`../images/svgs/${props.icon1}`)} alt=""/>
            <p className="caption">{props.paragraph1}</p>
        </div>
        <div className="project-highlights__highlight">
          <img className="project-highlights__icon" src={require(`../images/svgs/${props.icon2}`)} alt=""/>
            <p className="caption">{props.paragraph2}</p>
        </div>
        <div className="project-highlights__highlight">
          <img className="project-highlights__icon" src={require(`../images/svgs/${props.icon3}`)} alt=""/>
            <p className="caption">{props.paragraph3}</p>
        </div>
      </div>
    </div>
  </Fade>
)

export default ProjectHighlights