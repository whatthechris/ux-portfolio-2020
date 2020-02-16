import React from "react"
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
        <button className="menu" onClick={() => this.setState(
        {isMenuOpen: !this.state.isMenuOpen})}>
            {this.state.isMenuOpen && 
            <nav>
            <ul className="menu__text">
                {staticdata.projects.map(project =>(
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
                        <p>hello@cwdigital.ca</p>
                    </div>
                </li>
            </ul>
            <img className="menu__icon"src={require(`../images/svgs/close.svg`)}></img>
            </nav>
            }
            {!this.state.isMenuOpen &&
                <img className="menu__icon"src={require(`../images/svgs/menu.svg`)}/>  
            }
            <div className={this.state.isMenuOpen ? "menu__circle-open" : "menu__circle"}></div>
        </button>
    )
    };
}

export default Menu
