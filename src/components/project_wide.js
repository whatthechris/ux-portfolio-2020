import React from "react"

import "./styles/project_wide.scss"

const ProjectWide = props => (
  <div className="project-wide">
    <div className="project-wide__photo-section">
      <img className="project-wide__photo" src={props.photo} />
      <p className="caption project-wide__caption">{props.caption}</p>
    </div>
    <div className="project-wide__text">
      <h3 className="project-wide__heading">{props.heading}</h3>
      <p className="project-wide__paragraph">{props.paragraph}</p>
    </div>
  </div>
)

export default ProjectWide