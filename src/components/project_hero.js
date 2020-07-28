import React from "react"

import "./styles/project_hero.scss"

const ProjectHero = props => (
    <div className="project-hero">
        <div className="project-hero__text">
          <div className={'project-hero__heading ' + (props.narrowheading ? 'project-hero__heading-narrow' : '')}>
            <h1 className="display-heading">{props.title}</h1>
            <h4>{props.eyebrow}</h4>
          </div>
          {props.role1 &&
            <ul className="project-hero__list">
                <li><p className="caption">{props.role1}</p></li>
                <li><p className="caption">{props.role2}</p></li>
                <li><p className="caption">{props.role3}</p></li>
            </ul>
          }
        </div>
      </div>
)

export default ProjectHero