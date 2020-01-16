import React from "react"

import staticdata from "../../staticdata.json"

import "./styles/motion.scss"
import ProjectHero from "../components/project_hero.js"
import ProjectWide from "../components/project_wide.js"
import MotionProject from "../components/motion_project.js"
import Menu from "../components/menu"
import FullWidth from "../components/project_full-width"
import VideosSection from "../components/project_videos-section"
import Footer from "../components/footer.js"

const MotionPage = () => (
    <div className="motion">
      <Menu/>
      {staticdata.motioncontent.map(data =>(
        <ProjectHero
          eyebrow={data.hero__eyebrow}
          title={data.hero__title}
          role1={data.hero__role1}
          role2={data.hero__role2}
          client={data.hero__client}
          thumbnail={data.hero__thumbnail}
      />
      ))}
      <div className="page-container">
        <div>
          <div className="section-title"
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="500"
          data-sal-easing="ease">
            <h5>Client Work</h5>
          </div>
          {staticdata.motionclients.map(data =>(
          <MotionProject
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
        <div>
          <div className="section-title"
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="500"
          data-sal-easing="ease">
            <h5>Fun Projects</h5>
          </div>
          {staticdata.motionfun.map(data =>(
          <MotionProject
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
)

export default MotionPage
