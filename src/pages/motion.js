import React from "react"
import Fade from 'react-reveal/Fade'
import staticdata from "../../staticdata.json"
import { HeadProvider, Title, Meta } from 'react-head';

import "./styles/motion.scss"
import MotionProject from "../components/motion_project.js"
import Menu from "../components/menu"
import Footer from "../components/footer.js"
import PlayPauseButton from "../components/play_pause_button.js"

class MotionPage extends React.Component {
  constructor(props){
    super(props)
    this.pausePlayClick = this.pausePlayClick.bind(this);
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
    <HeadProvider>
    <Title>Chris Wong – Motion Projects</Title>
    <Meta name="robots" content="noindex, nofollow" />
    <div className="motion">
      <Menu/>
      <div className="motion-hero">
        <div className="motion-hero__play-pause">
          <PlayPauseButton onClick={this.pausePlayClick}/>
        </div>
        <div className='motion-hero__content'>
          <div className="motion-hero__text">
            <p>Communicating ideas through motion</p>
            <h1>Various Motion Projects</h1>
            <p className="pull-quote__global motion-hero__paragraph">I have a variety of experience creating <a href="#eq">2D motion graphics,</a> <a href="#spark">character animations,</a> <a href="#wise">photo parallax animations,</a> <a href="#stormtrooper">3D models, </a>composited videos, <a href="#brainstation">motion identities, educational video series</a> and many more in between. Take a look at some of my favourite projects below.</p>
          </div>
        </div>
        <div className="motion-hero__video">
          <video ref="vidRef" muted loop autoplay="true" src={require(`../images/homepage/intro_bg.mp4`)}/>
        </div>
      </div>
        <div className="motion__client-section">
          <Fade bottom>
            <div className="section-title">
              <h5>Client Work</h5>
            </div>
          </Fade>
          <div className="page-container motion__container">
          {staticdata.motionclients.map(data =>(
          <MotionProject
            id={data.motion__id}
            heading={data.motion__heading}
            subheading={data.motion__subheading}
            embed1={data.motion__embed1}
            embed2={data.motion__embed2}
            caption={data.motion__caption}
            paragraph1={data.motion__paragraph1}
            paragraph2={data.motion__paragraph2}
          />
          ))}
          </div>
        </div>
        <div>
          <Fade bottom>
            <div className="section-title">
              <h5>Personal Projects</h5>
            </div>
          </Fade>
          <div className="page-container">
          {staticdata.motionfun.map(data =>(
          <MotionProject
            id={data.motion__id}
            heading={data.motion__heading}
            subheading={data.motion__subheading}
            embed1={data.motion__embed1}
            embed2={data.motion__embed2}
            caption={data.motion__caption}
            paragraph1={data.motion__paragraph1}
            paragraph2={data.motion__paragraph2}
          />
          ))}
          </div>
      </div>
      <Footer />
    </div>
    </HeadProvider>
    )}
}

export default MotionPage
