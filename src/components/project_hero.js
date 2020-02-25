import React from "react"

import "./styles/project_hero.scss"

const ProjectHero = props => (
    <div className="project-hero">
      <div className={'project-hero__content ' + (props.thumbnail ? '' : 'project-hero__content-nothumbnail')}>
        <div className="project-hero__text">
          <div className={'project-hero__heading ' + (props.narrowheading ? 'project-hero__heading-narrow' : '')}>
            <p>{props.eyebrow}</p>
            <h1>{props.title}</h1><br/>
          </div>
          {props.role1 &&
            <div className="project-hero__details">
              <ul className="project-hero__list">
                  <h5>Project Roles</h5>
                  <li><p>{props.role1}</p></li>
                  <li><p>{props.role2}</p></li>
                  <li><p>{props.role3}</p></li>
              </ul>
              <ul className="project-hero__list">
                  <h5>Client</h5>
                  <li><p>{props.client}</p></li>
              </ul>
            </div>
          }
        </div>
        {props.thumbnail &&
          <img src={require(`../images/homepage/${props.thumbnail}`)} className="project-hero__image" alt=""/>
        }
      </div>
    </div>
)

export default ProjectHero