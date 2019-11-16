import React from "react"
import { Link } from "gatsby"

import "./styles/project_card.scss"

const ProjectCard = () => (
    <div className="project-card">
        <Link to="/page-2/">
        <div className="project-card__content">
            <div className="project-card__text">
                <div className="project-card__top-text">
                    <p className="project-card__eyebrow">Wayfinder Web App</p>
                    <h2>Helping hard working people save for the good life</h2>
                </div>
                <div className="project-card__bottom-text">
                    <ul className="project-card__roles">
                        <h5>Roles</h5>
                        <p>Motion Design</p>
                        <p>UI/ UX Design</p>
                    </ul>
                    <a className="text-link">View Case Study</a>
                    <img src={require('../images/svgs/arrow-right.svg')} />
                </div>
            </div>
            <div className="project-card__image">
                <img src={require('../images/homepage/wayfinder_thumb.png')} />
            </div>
        </div>
        <div className="project-card__highlight"></div>
        </Link>
    </div>
)

export default ProjectCard
