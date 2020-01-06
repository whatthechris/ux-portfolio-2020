import React from "react"

import "./styles/project_wide.scss"

const ProjectWide = props => (
  <div className="project-wide grid">
    <div className="project-wide__text">
      <h3 className="project-wide__heading">{props.heading}</h3>
      <p>{props.paragraph}</p>
    </div>
    <div className="project-wide__photo">
      <img src={require(`../images/${props.image}`)} />
    </div>
    <p className="project-wide__caption caption">{props.caption}</p>
  </div>
)

export default ProjectWide