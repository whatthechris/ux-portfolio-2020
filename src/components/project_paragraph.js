import React from "react"
import Fade from 'react-reveal/Fade'
import Button from "../components/button.js"

import "./styles/project_paragraph.scss"

const ProjectParagraph = props => (
    <div className="project-paragraph">
      <Fade bottom distance="100px">
        <h5>{props.eyebrow}</h5>
        <h3>{props.heading}</h3>
        <p>{props.paragraph}</p>
        {props.button_text &&
        <div className="project-paragraph__button">
          <Button
            link={props.button_link}
            text={props.button_text}
          />
        </div>
        }
      </Fade>
    </div>
)

export default ProjectParagraph