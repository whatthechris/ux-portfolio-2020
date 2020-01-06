import React from "react"

import "./styles/project_highlights.scss"

const ProjectHighlights = props => (
  <div className="project-highlights grid">
    <div className="project-highlights__title"><p>Project Highlights</p></div>
    <div className="project-highlights__text-section">
      <div 
        className="project-highlights__highlight"
        data-sal="slide-up"
        data-sal-duration="500"
        data-sal-easing="ease"
      >
        <img className="project-highlights__icon" src={require(`../images/svgs/${props.icon1}`)} />
        <div className="project-highlights__text">  
          <h3 className="project-highlights__heading">{props.heading1}</h3>
          <p className="project-highlights__paragraph">{props.paragraph1}</p>
        </div>
      </div>
      <div 
        className="project-highlights__highlight"
        data-sal="slide-up"
        data-sal-duration="500"
        data-sal-easing="ease"
      >
        <img className="project-highlights__icon" src={require(`../images/svgs/${props.icon2}`)} />
        <div className="project-highlights__text">
          <h3 className="project-highlights__heading">{props.heading2}</h3>
          <p className="project-highlights__paragraph">{props.paragraph2}</p>
        </div>
      </div>
      <div 
        className="project-highlights__highlight"
        data-sal="slide-up"
        data-sal-duration="500"
        data-sal-easing="ease"
      >
        <img className="project-highlights__icon" src={require(`../images/svgs/${props.icon3}`)} />
        <div className="project-highlights__text">
          <h3 className="project-highlights__heading">{props.heading3}</h3>
          <p className="project-highlights__paragraph">{props.paragraph3}</p>
        </div>
      </div>
    </div>
    <div 
      className="project-highlights__image-section"
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-easing="ease">
      <img src={require(`../images/${props.image}`)} />
      <p className="caption">{props.caption}</p>
    </div>
  </div>
)

export default ProjectHighlights