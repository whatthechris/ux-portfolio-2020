import React from "react"
import wayfinder from '../images/homepage/wayfinder_thumb.png';
import pcoptimum from '../images/homepage/pcoptimum_thumb.png';
import motion from '../images/homepage/motion_thumb.png';
import cia from '../images/homepage/cia_thumb.png';

import "./styles/test.scss"

class TestPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hasScrolled: false
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
    const windowHeight = window.innerHeight

    if (scrollTop > windowHeight){
      this.setState({ hasScrolled : true })
    } else {
      this.setState({ hasScrolled : false })
  }
 }
  render() {
    return(
    <div className="wrap">
      <div className="test__sticky">
        <div className="test__hero"><h1>Hero</h1></div>
        <div className={this.state.hasScrolled ? "test__intro fixed" : "test__intro"}><h1>Intro</h1></div>
      </div>
        <div className="test__cards">   
          <div className="test__column">     
            <div className="test__card">
              <h4>Wayfinder Web App</h4>
              <h2>Helping hard working people save for the good life</h2>
              <p>UI/UX Design <br/> Motion Design</p>
              <img src={wayfinder}/>
            </div>
            <div className="test__card">
              <h4>The Canadian Innovation Awards</h4>
              <h2>Celebrating Canadian Tech Innovation</h2>
              <p>UI/UX Design <br/> Motion Design</p>
              <img src={cia}/>
            </div>
          </div>  
          <div className="test__column">  
            <div className="test__card">
              <h4>PC Optimum Web App</h4>
              <h2>Leveling up Loblaw’s loyalty points game</h2>
              <img src={pcoptimum}/>
            </div>
            <div className="test__card">
              <h4>Various Motion Projects</h4>
              <h2>Communicating ideas through motion</h2>
              <img src={motion}/>
            </div>
          </div>
        </div>
    </div>
    )
  };
}

export default TestPage
