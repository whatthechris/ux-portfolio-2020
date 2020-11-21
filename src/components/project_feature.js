import React from "react"
import ImageZoom from 'react-medium-image-zoom'
import RevealAnimation from "./reveal_animation"

import "./styles/project_feature.scss"

const ProjectFeature = props => (
    <div className="project-feature">
        {props.image &&
          <RevealAnimation>
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
          </RevealAnimation>
        }
        {props.embed &&
          <RevealAnimation>
            <div className="project-feature__image">
              <iframe src={props.embed} width="439" height="439" frameborder="0" allow="autoplay; fullscreen" allowfullscreen title="Project video or interactive demo"></iframe>
            </div>
          </RevealAnimation>
        }
        <div className="project-feature__text">
          <h4>{props.heading}</h4>
          <p>{props.paragraph}</p>
        </div>
    </div>
)

export default ProjectFeature