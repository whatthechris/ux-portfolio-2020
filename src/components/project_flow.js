import React from "react"
import ImageZoom from 'react-medium-image-zoom'
import RevealAnimation from "./reveal_animation"

import "./styles/project_flow.scss"

const ProjectFlow = props => (
    <div className="project-flow">
      <RevealAnimation>
        <div className="project-flow__image-container">
          <div className="project-flow__image">
            <ImageZoom
              image={{
                src: require('../images/' + props.image1),
                alt: props.imagealt1,
                style: { width:'100%' }
              }}
              zoomMargin="0"
            />
          </div>
          <div className="project-flow__image">
            <ImageZoom
              image={{
                src: require('../images/' + props.image2),
                alt: props.imagealt2,
                style: { width:'100%' }
              }}
              zoomMargin="0"
            />
          </div>
          <div className="project-flow__image">
            <ImageZoom
              image={{
                src: require('../images/' + props.image3),
                alt: props.imagealt3,
                style: { width:'100%' }
              }}
              zoomMargin="0"
            />
          </div>
          <img className="project-flow__bgimage" src={require(`../images/`+ props.bgimage)}/>
        </div>
        <p className="project-flow__caption caption">{props.caption}</p>
      </RevealAnimation>
    </div>
)

export default ProjectFlow