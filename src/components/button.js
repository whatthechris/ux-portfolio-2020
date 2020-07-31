import React from "react"

import "./styles/button.scss"

const Button = props => (
    <a href={props.link} className="button" target="_blank" rel="noopener noreferrer">
        <p>{props.text}</p>
    </a>
)

export default Button