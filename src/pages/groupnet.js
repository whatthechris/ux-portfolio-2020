import React from "react"
import Parallax from 'react-rellax'
import staticdata from "../../staticdata.json"

import { Title, Meta, Link } from 'react-head';
import favicon16 from "../images/site-icon-16.png";
import favicon32 from "../images/site-icon-32.png";
import favicon64 from "../images/site-icon-64.png";

import "./styles/groupnet.scss"
import Menu from "../components/menu"
import Logo from "../components/logo.js"
import ProjectHero from "../components/project_hero.js"
import ProjectHighlights from "../components/project_highlights.js"
import ProjectParagraph from "../components/project_paragraph.js"
import ProjectImage from "../components/project_image.js"
import ProjectFeature from "../components/project_feature.js"
import PullQuote from "../components/pull_quote"
import ProjectNext from "../components/project_next.js"

const GroupNetPage = () => (
    <div>
      <Title>Chris Wong – GroupNet Mobile</Title>
      <Meta name="robots" content="noindex, nofollow" />
      <Link rel="icon" type="image/png" sizes="16x16" href={favicon16}/>
      <Link rel="icon" type="image/png" sizes="32x32" href={favicon32}/>
      <Link rel="shortcut icon" type="image/png" href={favicon64}/>
      <Menu/>
      <Logo/>
      <div className="overflow-container">
          <Parallax speed={-2} onMove={210,0} zIndex={200}>
            <div className="groupnet__hero-image-container">
              <img className="groupnet__hero-image" src={require(`../images/homepage/groupnet_mockup.png`)}/>
              </div>
            </Parallax>
            <div className="page-container">
              {staticdata.wayfindercontent.map(data =>(
                <ProjectHero
                  eyebrow="Making claiming employee benefits fast and easy"
                  title="GroupNet Mobile"
                  role1="Design Lead"
                  role2="UX/UI Design"
                  role3="Interaction Design"
                />
              ))}
              <div className="groupnet__highlights">
                {staticdata.wayfindercontent.map(data =>(
                  <ProjectHighlights 
                    icon1="mobile.svg"
                    paragraph1="Leveraged mobile functionalities to make the claims process easier"
                    icon2="thumbs-up.svg"
                    paragraph2="Designed the app for one handed use while carefully considering reachability"
                    icon3="route.svg"
                    paragraph3="Incorporated motion design to hint at app functionality"
                  />
                ))}
              </div>
              {staticdata.wayfindercontent.map(data =>(
                <ProjectParagraph
                  eyebrow=""
                  heading="Under Construction"
                  paragraph="This case study is currently under construction but you can check out the Figma prototype below."
                />
              ))}
              <div className="video-container">
              <ProjectImage
                  size="wide"
                  image=""
                  imagealt=""
                  embed="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F7yXGCy4hP4iayvtl6B8nB9%2FJupiter-Mobile-New-Designs%3Fnode-id%3D71%253A1729%26viewport%3D656%252C168%252C0.21991567313671112%26scaling%3Dscale-down&chrome=DOCUMENTATION"
                  caption=""
                />
              </div>
            </div>
            {staticdata.wayfindercontent.map(data =>(
              <ProjectNext
                link="/wayfinder"
                image="homepage/wayfinder_mockup.png"
                imagealt=""
                eyebrow="Next Project"
                heading="Wayfinder"
              />
            ))}
      </div>
    </div>
)

export default GroupNetPage
