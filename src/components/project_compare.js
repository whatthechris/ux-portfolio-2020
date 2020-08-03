import React from "react"
import ImageZoom from 'react-medium-image-zoom'
import Fade from 'react-reveal/Fade'

import "./styles/project_compare.scss"

const ProjectCompare = props => (
    <div className="project-compare">
      <Fade bottom distance="100px">
        <div className={(`project-compare__image-container ${props.bgcolor1}`)}>
            <ImageZoom
            image={{
              src: require('../images/' + props.image1),
              alt: props.imagealt1
            }}
            zoomMargin="0"
            />
        </div>
        <div className={(`project-compare__image-container ${props.bgcolor2}`)}>
            <ImageZoom
            image={{
              src: require('../images/' + props.image2),
              alt: props.imagealt2
            }}
            zoomMargin="0"
            />
        </div>
        <p className="project-image__caption caption">{props.caption}</p>
      </Fade>
    </div>
)

export default ProjectCompare