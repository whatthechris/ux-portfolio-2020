import React, {useState} from "react"
import { Link } from "gatsby"

import staticdata from "../../staticdata.json"

import "./styles/menu.scss"
import MenuItem from "../components/menu_item.js"

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isMenuOpen: false
        }
    }
    render(){
    return(
        <div className="menu" onClick={() => this.setState({isMenuOpen: !this.state.isMenuOpen})}>
            {this.state.isMenuOpen && 
            <ul className="menu__text">
                {staticdata.projectsleft.map(project =>(
                    <MenuItem
                        eyebrow={project.eyebrow}
                        thumbnail={project.thumbnail}
                        link={project.link}
                    />
                ))}
                {staticdata.projectsright.map(project =>(
                    <MenuItem
                        eyebrow={project.eyebrow}
                        thumbnail={project.thumbnail}
                        link={project.link}
                    />
                ))}
                <li className="menu__bottom-links">
                    <Link><h4>Back to intro</h4></Link>
                    <div>
                        <h4>Let's grab a coffee!</h4>
                        <p>hello@peopleoverpixels.ca</p>
                    </div>
                </li>
            </ul>}
            <div className={this.state.isMenuOpen ? "menu__circle-open" : "menu__circle"}></div>
        </div>
    )
    };
}

export default Menu
