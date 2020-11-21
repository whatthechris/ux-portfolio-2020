import React from "react"

import "./styles/project_highlights.scss"

const ProjectHighlights = props => (
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
)

export default ProjectHighlights