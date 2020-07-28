import React from "react"
import ImageZoom from 'react-medium-image-zoom'
import Fade from 'react-reveal/Fade'

import "./styles/project_feature.scss"

const ProjectFeature = props => (
    <div className="project-feature">
      <Fade bottom distance="100px">
        {props.image &&
          <div className="project-feature__image">
            <ImageZoom
            image={{
              src: require('../images/' + props.image),
              alt: props.imagealt,
              style: { width:'100%' }
            }}
            zoomMargin="0"
            />
          </div>
        }
        <div className="project-feature__text">
          <h4>{props.heading}</h4>
          <p>{props.paragraph}</p>
        </div>
      </Fade>
    </div>
)

export default ProjectFeature