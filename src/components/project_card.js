import React from "react"
import { Link } from "gatsby"

import "./styles/project_card.scss"

const ProjectCard = props => (
    <div className="project-card">
        <Link to={props.link}>
            <h4>{props.eyebrow}</h4>
            <h2>{props.heading}</h2>
            <p>UI/UX Design <br/> Motion Design</p>
            <div className="project-card__image-section">
                <img src={require(`../images/homepage/${props.thumbnail}`)} />
                <div className="project-card__circle"></div>
            </div>
        </Link>
    </div>
)

export default ProjectCard
