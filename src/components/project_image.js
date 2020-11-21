import React from "react"
import ImageZoom from 'react-medium-image-zoom'
import RevealAnimation from "./reveal_animation"

import "./styles/project-image.scss"

const ProjectImage = props => (
    <div className={"project-image " + 
      (props.size == "small" ? 'project-image-small' : '')+
      (props.size == "large" ? 'project-image-large' : '')+
      (props.size == "wide" ? 'project-image-wide' : '')
    }>
        {props.image &&
          <RevealAnimation>
            <ImageZoom
            image={{
              src: require('../images/' + props.image),
              alt: props.imagealt,
              style: { width:'100%' }
            }}
            zoomMargin="0"
            />
          </RevealAnimation>
        }
        {props.embed &&
          <RevealAnimation>
            <div>
              <iframe src={props.embed} frameborder="0" allow="autoplay; fullscreen; microphone" allowfullscreen title="Project video or interactive demo"></iframe>
            </div>
          </RevealAnimation>
        }
        <RevealAnimation>
        <p className="project-image__caption caption">{props.caption}</p>
        </RevealAnimation>
    </div>
)

export default ProjectImage