import React from "react"

import "./styles/logo.scss"

const Logo = props => (
    <a href="/" className={props.color === "light" ? 'logo logo-light' : 'logo' }>
        <div className="logo__circle"></div>
        <h5>Chris Wong</h5>
    </a>
)

export default Logo