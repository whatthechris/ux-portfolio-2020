import React from "react"
import ImageZoom from 'react-medium-image-zoom'
import Fade from 'react-reveal/Fade'

import "./styles/project_highlights.scss"

const ProjectHighlights = props => (
  <div className="project-highlights grid">
    <div className="project-highlights__text-section">
      <Fade bottom>
        <div className="project-highlights__highlight">
          <img className="project-highlights__icon" src={require(`../images/svgs/${props.icon1}`)} />
          <div className="project-highlights__text">  
            <h3 className="project-highlights__heading">{props.heading1}</h3>
            <p className="project-highlights__paragraph">{props.paragraph1}</p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="project-highlights__highlight">
          <img className="project-highlights__icon" src={require(`../images/svgs/${props.icon2}`)} />
          <div className="project-highlights__text">
            <h3 className="project-highlights__heading">{props.heading2}</h3>
            <p className="project-highlights__paragraph">{props.paragraph2}</p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="project-highlights__highlight">
          <img className="project-highlights__icon" src={require(`../images/svgs/${props.icon3}`)} />
          <div className="project-highlights__text">
            <h3 className="project-highlights__heading">{props.heading3}</h3>
            <p className="project-highlights__paragraph">{props.paragraph3}</p>
          </div>
        </div>
      </Fade>
    </div>
    <Fade bottom distance="100px" delay={500}>
    <div className="project-highlights__image-section">
      <ImageZoom
        image={{
          src: require('../images/' + props.image),
          alt: '',
          style: { width:'100%' }
        }}
        zoomMargin="0"
      />
      <p className="project-highlights__caption caption">{props.caption}</p>
    </div>
    </Fade>
  </div>
)

export default ProjectHighlights