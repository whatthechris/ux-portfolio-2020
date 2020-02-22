import React from "react"
import { Link } from "gatsby"

import "./styles/menu_item.scss"

const MenuItem = props =>(
    <li className="menu__item" role="menuitem">
        <img src={require(`../images/homepage/${props.thumbnail}`)} alt=""/>
        <h3><Link to={props.link}>{props.eyebrow}</Link></h3>
    </li>
)

export default MenuItem
