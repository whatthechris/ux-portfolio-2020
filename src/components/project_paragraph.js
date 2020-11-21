import React from "react"
import Reveal from "react-awesome-reveal"
import Button from "../components/button.js"
import RevealAnimation from "./reveal_animation.js"

import "./styles/project_paragraph.scss"

const ProjectParagraph = props => (
    <div className="project-paragraph">
        <RevealAnimation>
          <div>
            <h5>{props.eyebrow}</h5>
            <h3>{props.heading}</h3>
            <p>{props.paragraph}</p>
          </div>
        </RevealAnimation>
        {props.button_text &&
          <RevealAnimation>
            <div className="project-paragraph__button">
              <Button
                link={props.button_link}
                text={props.button_text}
              />
            </div>
          </RevealAnimation>
        }
    </div>
)

export default ProjectParagraph