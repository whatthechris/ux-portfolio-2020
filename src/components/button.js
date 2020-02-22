import React from "react"

import "./styles/button.scss"

const Button = props => (
    <a href={props.button_link} className="button" target="_blank" rel="noopener noreferrer">
        <h5>{props.button_text}</h5>
    </a>
)

export default Button