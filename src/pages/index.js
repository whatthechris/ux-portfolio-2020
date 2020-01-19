import React from "react"

import staticdata from "../../staticdata.json"

import "./styles/homepage.scss"
import HomepageHero from "../components/homepage_hero.js"
import ProjectCard from "../components/project_card.js"
import Footer from "../components/footer.js"
import Menu from "../components/menu.js"

class IndexPage extends React.Component {
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
    const windowHeight = window.innerHeight - (window.innerHeight * 0.08)

    if (scrollTop > windowHeight){
      this.setState({ hasScrolled : true })
    } else {
      this.setState({ hasScrolled : false })
  }
 }
  render() {
    return(
    <div className="homepage">
      <Menu/>
      <HomepageHero />
      <div className={this.state.hasScrolled ? "homepage__intro fixed" : "homepage__intro"}>
        <p className="pull-quote__global">I’ve worked with a variety of clients including <a href="http://eqbank.ca">banks,</a> <a href="http://moneris.com">payment processors,</a> <a href="">awards shows,</a> <a href="">consumer-facing products</a> and many more. <br/><br/>Take a look at some of my favourite projects below.</p>
        <div className="homepage__video-grid">
          <video muted loop autoplay="true" src={require(`../images/homepage/intro_bg.mp4`)}/>
        </div>
      </div>
      <div className="homepage__cards">   
        <div className="homepage__column">    
          {staticdata.projectsleft.map(project =>(
            <ProjectCard
            eyebrow={project.eyebrow}
            heading={project.heading}
            thumbnail={project.thumbnail}
            link={project.link}
          />
          ))}
        </div>  
        <div className="homepage__column">  
        {staticdata.projectsright.map(project =>(
            <ProjectCard
            eyebrow={project.eyebrow}
            heading={project.heading}
            thumbnail={project.thumbnail}
            link={project.link}
          />
          ))}
        </div>
        <Footer />
      </div>
    </div>
    )
  };
}

export default IndexPage
