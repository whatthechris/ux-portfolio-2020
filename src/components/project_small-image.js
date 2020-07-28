import React from "react"
import ImageZoom from 'react-medium-image-zoom'
import Fade from 'react-reveal/Fade'

import "./styles/project_small-image.scss"

const ProjectSmallImage = props => (
    <div className="project-small-image">
      <Fade bottom distance="100px">
        {props.image &&
          <ImageZoom
          image={{
            src: require('../images/' + props.image),
            alt: props.imagealt,
            style: { width:'100%' }
          }}
          zoomMargin="0"
          />
        }
        <p className="caption">{props.caption}</p>
      </Fade>
    </div>
)

export default ProjectSmallImage