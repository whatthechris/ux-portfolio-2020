import React from "react"
import Fade from 'react-reveal/Fade'

import "./styles/project_next.scss"

const ProjectNext = props => (
  <a href={props.link}>
    <div className="project-next">
      <Fade bottom distance="100px">
        <div className="project-next__container">
          <div className="project-next__image-container">
            <img src={require(`../images/${props.image}`)} alt={props.imagealt}/>
          </div>
          <div className="project-next__text">
            <h5>{props.eyebrow}</h5>
            <h2>{props.heading}</h2>
          </div>
        </div>
      </Fade>
      </div>
    </a>
)

export default ProjectNext