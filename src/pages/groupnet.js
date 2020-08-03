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
import ProjectCompare from "../components/project_compare.js"
import ProjectNext from "../components/project_next.js"

import ImageZoom from 'react-medium-image-zoom'

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
          <Parallax speed={-2}>
            <div className="groupnet__hero-image-container">
              <img className="groupnet__hero-image" src={require(`../images/homepage/groupnet_mockup.png`)}/>
              </div>
            </Parallax>
            <div className="page-container">
              {staticdata.wayfindercontent.map(data =>(
                <ProjectHero
                  eyebrow="Making employee benefit claims fast and easy"
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
                    paragraph2="Designed the app for one handed use and large mobile devices"
                    icon3="route.svg"
                    paragraph3="Incorporated motion design to hint at app functionality"
                  />
                ))}
              </div>
              <ProjectParagraph
                eyebrow="The Challenge"
                heading="Held back by the past"
                paragraph="Thousands of employees across Canada use Great West Life’s GrouptNet web app daily to submit and track their benefit claims. I was tasked with designing the corresponding mobile app using the Great West Life brand guidelines and UX design patterns. Although comprehensive, the guidelines and design patterns weren’t well adapted for mobile app design. Furthermore, the backend of the legacy GroupNet platform dictated the formatting and flow of user information which wasn’t the best experience for users. After the launch, I redesigned the app as a personal project."
                button_link=""
                button_text=""
              />
              <ProjectCompare
                image1="groupnet/groupnet_compare_mock1.png"
                image1alt=""
                bgcolor1="bgcolor-gn-green"
                image2="groupnet/groupnet_compare_mock2.png"
                image2alt=""
                bgcolor2="bgcolor-gn-blue"
                caption="V1 and v2 of the GroupNet mobile app. Click or tap the images to zoom in."
              />
              <ProjectParagraph
                eyebrow="The Approach"
                heading="More usable and understandable"
                paragraph="Unrestrained by the project constraints, the goal was to improve the usability design patterns and make the app more appealing while retaining the core functionalities. The main pain points that I focused on included creating more visual hierarchy, designing for one handed use and organizing the user’s information in a more understandable way."
                button_link=""
                button_text=""
              />
              </div>
              <div className="groupnet__parallax">
                <Parallax speed={-2}>
                <ImageZoom
                  image={{
                    src: require('../images/groupnet/groupnet_dual_mock.png'),
                    alt:""
                  }}
                  zoomMargin="0"
                  />
                </Parallax>
              </div>
              <div className="page-container">
              <ProjectParagraph
                eyebrow="The Approach"
                heading="More usable and understandable"
                paragraph="Unrestrained by the project constraints, the goal was to improve the usability design patterns and make the app more appealing while retaining the core functionalities. The main pain points that I focused on included creating more visual hierarchy, designing for one handed use and organizing the user’s information in a more understandable way."
                button_link=""
                button_text=""
              />
              {staticdata.wayfindercontent.map(data =>(
              <ProjectFeature
                image={data.section5__image1}
                imagealt={data.section5__image1alt}
                heading="Personalized Plans"
                paragraph=""
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
              <ProjectNext
                link="/pcoptimum"
                image="homepage/pcoptimum_mockup.png"
                imagealt=""
                heading="PC Optimum"
                subheading="Leveling up Loblaw's loyalty points game"
                bgcolor="bgcolor-pcoptimum"
              />
      </div>
    </div>
)

export default GroupNetPage
