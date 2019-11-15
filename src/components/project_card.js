import React from "react"
import { Link } from "gatsby"

import "./styles/project_card.scss"

const ProjectCard = () => (
    <div className="projectcard">
        <div className="content">
            <div className="content--text">
                <div className="content--text-heading">
                    <p>Wayfinder Web App</p>
                    <h2>Helping hard working people save for the good life</h2>
                </div>
                <div className="content--text-bottom">
                    <ul className="content--text-bottomlist">
                        <h5>Roles</h5>
                        <p>Motion Design</p>
                        <p>UI/ UX Design</p>
                    </ul>
                    <Link>View Case Study</Link>
                </div>
            </div>
            <div className="content--image">
                <img src={require('../images/homepage/wayfinder_thumb.png')} />
            </div>
        </div>
        <div className="colorhighlight"></div>
    </div>
)

export default ProjectCard
