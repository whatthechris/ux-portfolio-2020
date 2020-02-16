import React from "react"
import { Link } from "gatsby"

import "./styles/project_card.scss"

const ProjectCard = props => (
    <div className="project-card">
        {props.link &&
        <Link to={props.link}>
            <h4>{props.eyebrow}</h4>
            <h2>{props.heading}</h2>
            <p>{props.role1} <br/> {props.role2}<br/> {props.role3}</p>
            <div className="project-card__image-section">
                <img src={require(`../images/homepage/${props.thumbnail}`)} />
                <div className="project-card__circle"></div>
            </div>
        </Link>
        }
        {props.nolink &&
        <div>
            <h4>{props.eyebrow}</h4>
            <h2>{props.heading}</h2>
        </div>
        }
    </div>
)

export default ProjectCard
