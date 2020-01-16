import React from "react"

import "./styles/project_hero.scss"

const ProjectHero = props => (
    <div className="project-hero">
      <div className="project-hero__content">
        <div className="project-hero__text">
          <div className="project-hero__heading">
            <p>{props.eyebrow}</p>
            <h1>{props.title}</h1>
          </div>
          <div className="project-hero__details">
            <ul className="project-hero__list">
                <h5>Project Roles</h5>
                <p>{props.role1}</p>
                <p>{props.role2}</p>
                <p>{props.role3}</p>
            </ul>
            <ul className="project-hero__list">
                <h5>Client</h5>
                <p>{props.client}</p>
            </ul>
          </div>
        </div>
        <img src={require(`../images/homepage/${props.thumbnail}`)} className="project-hero__image"/>
      </div>
      <div className="project-hero__bg"></div>
    </div>
)

export default ProjectHero