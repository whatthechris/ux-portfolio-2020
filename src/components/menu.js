import React from "react"
import { Link } from "gatsby"

import staticdata from "../../staticdata.json"

import "./styles/menu.scss"

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
            <div>
                <div className="menu__text">
                    <h3>Hey there!</h3>
                    <p>I’m Chris, a product designer from Toronto currently looking for remote and  over seas opportunities.<br/><br/>
                    I’m a designer who codes, an animator who illustrates and a life-long learner who teaches. I use this unique combination of skills to create exciting and thoughtful digital experiences focusing on the needs of everyday people.<br/><br/>
                    On the side, I create <a href="">motion graphics</a> that move people and make <a href="https://gifmusic2.netlify.app">fun web projects</a> that empower others to create.
                    </p>
                    <br/><br/>
                    <h5>Let's grab a coffee</h5>
                    <p>hello@cwdigital.ca</p>
                </div>
            <img className="menu__icon" src={require(`../images/svgs/close.svg`)} alt="Close icon"/>
            </div>
            }
            {!this.state.isMenuOpen &&
                <img className="menu__icon" src={require(`../images/svgs/wave.svg`)} alt="Menu icon"/>  
            }
            <div className={this.state.isMenuOpen ? "menu__circle-open" : "menu__circle"}></div>
        </button>
    )
    };
}

export default Menu
