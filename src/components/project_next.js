import React from "react"
import Fade from 'react-reveal/Fade'

import "./styles/project_next.scss"

const ProjectNext = props => (
  <a href={props.link}>
    <div className={(`project-next ${props.bgcolor}`)}>
        <div className="project-next__container">
          <Fade bottom distance="100px">
            <div className="project-next__image-container">
              <img src={require(`../images/${props.image}`)} alt={props.imagealt}/>
            </div>
            <div className="project-next__text">
              <h3>{props.heading}</h3>
              <p>{props.subheading}</p>
            </div>
          </Fade>
        </div>
    </div>
  </a>
)

export default ProjectNext