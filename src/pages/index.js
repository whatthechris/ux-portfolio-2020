import React from "react"

import staticdata from "../../staticdata.json"

import "./styles/homepage.scss"
import HomepageHero from "../components/homepage_hero.js"
import ProjectCard from "../components/project_card.js"
import Footer from "../components/footer.js"
import Menu from "../components/menu.js"
import PlayPauseButton from "../components/play_pause_button.js"

import { Title, Meta, Link } from 'react-head';
import favicon16 from "../images/site-icon-16.png";
import favicon32 from "../images/site-icon-32.png";
import favicon64 from "../images/site-icon-64.png";

class IndexPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hasScrolled: false
    }
    this.pausePlayClick = this.pausePlayClick.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
    const windowHeight = window.innerHeight - (window.innerHeight * 0.05)

    if (scrollTop > windowHeight){
      this.setState({ hasScrolled : true })
    } else {
      this.setState({ hasScrolled : false })
    }
  }
  pausePlayClick() {
    if (this.refs.vidRef.paused == true) {
      this.refs.vidRef.play();
    } else {
      this.refs.vidRef.pause();
    }
  }
  render() {
    return(
    <div className="homepage">
      <Title>Chris Wong Portfolio</Title>
      <Meta name="robots" content="noindex, nofollow" />
      <Link rel="icon" type="image/png" sizes="16x16" href={favicon16}/>
      <Link rel="icon" type="image/png" sizes="32x32" href={favicon32}/>
      <Link rel="shortcut icon" type="image/png" href={favicon64}/>
      <Menu/>
      <HomepageHero />
      <div className={this.state.hasScrolled ? "homepage__intro fixed" : "homepage__intro"}>
        <div className="homepage__play-pause">
          <PlayPauseButton onClick={this.pausePlayClick}/>
        </div>
        <p className="pull-quote__global homepage__pull-quote">I’ve worked with a variety of clients including <a href="http://eqbank.ca" target="_blank" rel="noopener noreferrer">banks,</a> <a href="https://brainstation.io/" target="_blank" rel="noopener noreferrer">digital education companies,</a> <a href="http://moneris.com" target="_blank" rel="noopener noreferrer">payment processors,</a> <a href="https://www.borndigital.com/2018/02/23/winners-of-the-seventh-annual-canadian-innovation-awards" target="_blank" rel="noopener noreferrer">awards shows,</a> <a href="https://www.greatwestlife.com/you-and-your-family.html" target="_blank" rel="noopener noreferrer">benefits providers,</a> <a href="https://www.tweed.com" target="_blank" rel="noopener noreferrer">consumer-facing products,</a> <a href="https://www.pcoptimum.ca/" target="_blank" rel="noopener noreferrer">loyalty points programs</a> and many more. <br/><br/>Take a look at some of my favourite projects below.</p>
        <div className="homepage__video-grid">
          <video ref="vidRef" muted loop autoplay="true" src={require(`../images/homepage/intro_bg.mp4`)} poster={require(`../images/homepage/intro_poster.png`)}/>
        </div>
      </div>
      <div className="homepage__card-section">     
          {staticdata.projects.map(project =>(
            <div className="homepage__card">
              <ProjectCard
              eyebrow={project.eyebrow}
              heading={project.heading}
              thumbnail={project.thumbnail}
              link={project.link}
              role1={project.role1}
              role2={project.role2}
              role3={project.role3}
              />
            </div>
          ))}
          <div className="homepage__card homepage__card-empty">
              <h4>That's it for now</h4>
              <h2>Stay tuned for more case studies</h2>
                <div className="homepage__dot">
                  <div className="homepage__dot-circle"></div>
                  <div className="homepage__dot-circle"></div>
                  <div className="homepage__dot-circle"></div>
                </div>
          </div>
        <Footer />
      </div>
    </div>
    )
  };
}

export default IndexPage
