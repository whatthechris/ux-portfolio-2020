import React from "react"
import ImageZoom from 'react-medium-image-zoom'
import Fade from 'react-reveal/Fade'

import "./styles/project-image.scss"

const ProjectImage = props => (
    <div className={"project-image " + 
      (props.size == "small" ? 'project-image-small' : '')+
      (props.size == "large" ? 'project-image-large' : '')+
      (props.size == "wide" ? 'project-image-wide' : '')
    }>
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
        {props.embed &&
          <div>
            <iframe src={props.embed} frameborder="0" allow="autoplay; fullscreen; microphone" allowfullscreen title="Project video or interactive demo"></iframe>
          </div>
        }
        <p className="project-image__caption caption">{props.caption}</p>
      </Fade>
    </div>
)

export default ProjectImage