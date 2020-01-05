import React from "react"

import "./styles/project_hero2.scss"

const ProjectHero2 = props => (
    <div className="project-hero2">
      <div className="project-hero2__content container">
        <div className="project-hero2__heading">
            <p>{props.eyebrow}</p>
            <h1>{props.title}</h1>
          </div>
        <div className="project-hero2__details">
            <ul className="project-hero2__list">
                <h5>Project Roles</h5>
                <p>{props.role1}</p>
                <p>{props.role2}</p>
                <p>{props.role3}</p>
            </ul>
            <ul className="project-hero2__list">
                <h5>Client</h5>
                <p>{props.client}</p>
            </ul>
          </div>
        <img src={require('../images/homepage/cia_thumb.png')} className="project-hero__image"/>
      </div>
      <div className="project-hero2__bg"></div>
    </div>
)

export default ProjectHero2