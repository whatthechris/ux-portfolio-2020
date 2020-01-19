import React from "react"
import ProjectCard from "../components/project_card.js"

import staticdata from "../../staticdata.json"

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
          {staticdata.projects.map(project =>(
            <div className="test__card">
              <ProjectCard
              eyebrow={project.eyebrow}
              heading={project.heading}
              thumbnail={project.thumbnail}
              link={project.link}
              />
            </div>
            ))}
        </div>
    </div>
    )
  };
}

export default TestPage
