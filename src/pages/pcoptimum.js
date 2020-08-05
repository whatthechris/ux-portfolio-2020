import React from "react"
import Parallax from 'react-rellax'
import staticdata from "../../staticdata.json"

import { Title, Meta, Link } from 'react-head';
import favicon16 from "../images/site-icon-16.png";
import favicon32 from "../images/site-icon-32.png";
import favicon64 from "../images/site-icon-64.png";

import "./styles/pcoptimum.scss"
import Menu from "../components/menu"
import Logo from "../components/logo.js"
import ProjectHero from "../components/project_hero.js"
import ProjectHighlights from "../components/project_highlights.js"
import ProjectParagraph from "../components/project_paragraph.js"
import ProjectNext from "../components/project_next.js"

const PCOptimumPage = () => (
    <div>
      <Title>Chris Wong – GroupNet Mobile</Title>
      <Meta name="robots" content="noindex, nofollow" />
      <Link rel="icon" type="image/png" sizes="16x16" href={favicon16}/>
      <Link rel="icon" type="image/png" sizes="32x32" href={favicon32}/>
      <Link rel="shortcut icon" type="image/png" href={favicon64}/>
      <Menu/>
      <Logo/>
      <div className="overflow-container">
          <Parallax speed={-2}>
            <div className="pcoptimum__hero-image-container">
              <img className="pcoptimum__hero-image" src={require(`../images/homepage/pcoptimum_mockup.png`)}/>
              </div>
            </Parallax>
            <div className="page-container">
                <ProjectHero
                  eyebrow="Leveling up Loblaw's loyalty points game"
                  title="PC Optimum"
                  role1="Front End Development"
                  role2="Interaction Design"
                  role3="Motion Design"
                />
              <div className="pcoptimum__highlights">
                  <ProjectHighlights 
                    icon1="code.svg"
                    paragraph1="Worked with the engineering team and contributed to the codebase"
                    icon2="pencil.svg"
                    paragraph2="Designed and built features by working closely with product managers"
                    icon3="route.svg"
                    paragraph3="Incorporated motion design to hint at app functionality"
                  />
              </div>
                <ProjectParagraph
                  eyebrow=""
                  heading="Under Construction"
                  paragraph="This case study is currently under construction but you can check out the finished product at pcoptimum.ca"
                  button_link="https://pcoptimum.ca"
                  button_text="PC Optimum site"
                />
            </div>
              <ProjectNext
                link="/wayfinder"
                image="homepage/wayfinder_mockup.png"
                imagealt=""
                heading="Wayfinder"
                subheading="Helping people save for their future"
                bgcolor="bgcolor-wayfinder"
              />
      </div>
    </div>
)

export default PCOptimumPage
