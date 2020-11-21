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
import ProjectFeature from "../components/project_feature.js"
import ProjectImage from "../components/project_image.js"
import ProjectNext from "../components/project_next.js"

import ImageZoom from 'react-medium-image-zoom'

const PCOptimumPage = () => (
    <div>
      <Title>Chris Wong – PC Optimum</Title>
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
                  eyebrow="The Challenge"
                  heading="Two points programs, one web app"
                  paragraph="In the largest Canadian retail acquisition in recent history, Loblaws Companies Limited looked to merge it's loyalty points program, PC Plus, with Shopper's Drug Mart's Optimum program. The benefit of merging the two programs was that millions of existing members would soon be able to collect and spend their points at over 2,500 Loblaws, Shoppers, No Frills and Real Canadian Super Stores nation-wide under one points system, PC Optimum.  The first step was to build a web app which would allow existing members to transfer their legacy points and manage them. Some new features included the ability for members to pool their points with other members of their household,  inquire about any point discrepancies and even donate points to charities."
                  button_link=""
                  button_text=""
                />
                <ProjectImage
                  size="large"
                  image="pcoptimum/pcoptimum_mockup2.png"
                  imagealt=""
                  embed=""
                  caption="During the transition period, existing PC Plus and Optimum members were able to transfer their legacy points to the new platform "
                />
                <ProjectParagraph
                  eyebrow="Working with the team"
                  heading="Half designer, half dev"
                  paragraph="Building this complex web application at such a large scale required the collaborative effort of the biggest players in Canada's digital creation space: Loblaws Digital and Konrad Group. Working onsite, I took on a unique role in bridging the gap and blurring the lines between product designer, motion/interaction designer and front-end developer. Moving quickly, I would discuss the new features with the product managers, figure out the UX, design the UI, design the animations if needed and then code it, sometimes all in the same day."
                  button_link=""
                  button_text=""
                />
                <ProjectImage
                  size="large"
                  image="pcoptimum/pcoptimum_homepage.png"
                  imagealt=""
                  embed=""
                  caption="Once signed in, members can link their cards, manage their points and view personalized and seasonal offers directly from the homepage."
                />
                <ProjectParagraph
                  eyebrow="Project Contributions"
                  heading="Get to the points!"
                  paragraph="I helped build the front-end of the web app on a React, Javascript and Sass tech stack and used best practices such as semantic HTML and BEM naming conventions. In order to reach as many Canadians as possible, the web app needed to be able to toggle between English and French languages and meet WCAG AA accessibility compliance standards. Below are some of the components and features that I designed and built."
                  button_link=""
                  button_text=""
                />
                <ProjectFeature
                  image=""
                  imagealt=""
                  embed="https://player.vimeo.com/video/479997898?autoplay=1&loop=1"
                  heading="Collect and redeem"
                  paragraph="Many plan members like to submit their benefits claims right after visiting their service provider or making a reimbursable purchase. In order to accommodate these use cases, quick sign in with Touch ID was implemented and receipt scanning for quick form input was added to the claims flow."
                />
                <ProjectFeature
                  image=""
                  imagealt=""
                  embed="https://player.vimeo.com/video/479997898?autoplay=1&loop=1"
                  heading="Responsive Page Layouts"
                  paragraph="Many plan members like to submit their benefits claims right after visiting their service provider or making a reimbursable purchase. In order to accommodate these use cases, quick sign in with Touch ID was implemented and receipt scanning for quick form input was added to the claims flow."
                />
                <ProjectFeature
                  image=""
                  imagealt=""
                  embed="https://player.vimeo.com/video/479997898?autoplay=1&loop=1"
                  heading="It's all in the details"
                  paragraph="Many plan members like to submit their benefits claims right after visiting their service provider or making a reimbursable purchase. In order to accommodate these use cases, quick sign in with Touch ID was implemented and receipt scanning for quick form input was added to the claims flow."
                />
                <div className="pcoptimum__parallax">
                  <Parallax speed={-2}>
                  <ImageZoom
                    image={{
                      src: require('../images/pcoptimum/pcoptimum_prs.png'),
                      alt:""
                    }}
                    zoomMargin="0"
                    />
                  </Parallax>
                </div>
                <p className="pcoptimum__caption caption">I committed 30+ pull requests, helped with QA fixes, IE debugging and conducted code reviews for other devs on my team before pushing to production.</p>
                <ProjectParagraph
                  eyebrow="The Results"
                  heading="Built to last"
                  paragraph="Over the seven month project I helped lay the groundwork for the web app that impacted the lives of 18 million members on launch. To this day, my work still lives on the platform and continues to be used by millions of Canadians everyday."
                  button_link="https://pcoptimum.ca"
                  button_text="PC Optimum Web App"
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
