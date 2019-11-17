import React from "react"
import { Link } from "gatsby"

import "./styles/project_card.scss"

const ProjectCard = props => (
    <div className={"project-card" + (props.smallcard ? ' project-card--small' : '')}>
        <Link to="/page-2/">
        <div className={"project-card__content" + (props.smallcard ? ' project-card__content--small' : '')}>
            <div className={"project-card__text" + (props.smallcard ? ' project-card__text--small' : '')}>
                <div className="project-card__top-text">
                    <p className="project-card__eyebrow">{props.eyebrow}</p>
                    <h2>{props.heading}</h2>
                </div>
                <div className="project-card__bottom-text">
                    <ul className={"project-card__roles" + (props.smallcard ? ' project-card__roles--small' : '')}>
                        <h5>Roles</h5>
                        <p>Motion Design</p>
                        <p>UI/ UX Design</p>
                    </ul>
                    <a className="text-link">{props.textlink}</a>
                    <img src={require('../images/svgs/arrow-right.svg')} />
                </div>
            </div>
            <div className={"project-card__image" + (props.smallcard ? ' project-card__image--small' : '')}>
                <img src={props.thumbnail} className={(props.smallcard ? ' project-card__image--smallimg' : '')}/>
            </div>
        </div>
        <div className={"project-card__highlight" + (props.smallcard ? ' project-card__highlight--small' : '') + (props.sand ? ' project-card__highlight--sand' : '') + (props.moss ? ' project-card__highlight--moss' : '') + (props.earth ? ' project-card__highlight--earth' : '')}></div>
        </Link>
    </div>
)

export default ProjectCard
