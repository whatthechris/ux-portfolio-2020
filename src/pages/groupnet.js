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
import ProjectCompare from "../components/project_compare.js"
import ProjectFlow from "../components/project_flow.js"
import ProjectNext from "../components/project_next.js"

import ImageZoom from 'react-medium-image-zoom'
import Button from "../components/button";

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
                    paragraph3="Improved the app experience with usability heuristics"
                  />
                ))}
              </div>
              <ProjectParagraph
                eyebrow="The Challenge"
                heading="A dated and slow process"
                paragraph="Thousands of employees across Canada use Great West Life’s GrouptNet web app daily to submit and track their benefit claims. Originally, I was tasked with designing the corresponding mobile app using the Great West Life brand guidelines and UX design patterns. Although comprehensive, the guidelines and design patterns weren’t well adapted for mobile app design. Furthermore, the backend of the legacy GroupNet platform dictated the formatting and flow of user information which wasn’t the best experience for plan members. After the launch, I redesigned the app as a personal project."
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
                heading="Usability always top of mind"
                paragraph="Unrestrained by the GWL design guidelines and legacy platform, the goal was to improve the usability design patterns and make the app more appealing while retaining the core functionalities. A usability heuristics audit was conducted to identify areas for improvement. Drawing from the main pain points, the app redesign focused on creating more visual hierarchy and interest, designing for one handed use and organizing the user’s information in a more understandable way."
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
                eyebrow="The Solution"
                heading="Leveling up the app experience"
                paragraph="Along with the enhancements below, user information was grouped and sequenced for better practicality and the UX copy was aligned to match words, phrases and concepts that are familiar to users. On the visual side, a higher contrast type scale allowed the information to be more easily discerned and vector illustrations were incorporated to keep the visuals more unified and consistent. Since accessibility and inclusive design are important (especially in Canada) the new design is also WCAG 2.0 Level AA compliant."
                button_link=""
                button_text=""
              />
              {staticdata.wayfindercontent.map(data =>(
              <ProjectFeature
                image="groupnet/groupnet_feature1.png"
                imagealt={data.section5__image1alt}
                heading="Built for users on the go"
                paragraph="Many plan members like to submit their benefits claims right after visiting their service provider or making a reimbursable purchase. In order to accommodate these use cases, quick sign in with Touch ID was implemented and receipt scanning for quick form input was added to the claims flow."
              />
              ))}
              {staticdata.wayfindercontent.map(data =>(
              <ProjectFeature
                image="groupnet/groupnet_feature2.png"
                imagealt={data.section5__image1alt}
                heading="All within reach"
                paragraph="Keeping one-handed use and large phones in mind, reachability was carefully considered when placing elements and designing interactions. Swipe gestures were implemented where appropriate to reduce the need for users to shift their phone grip."
              />
              ))}
              {staticdata.wayfindercontent.map(data =>(
              <ProjectFeature
                image="groupnet/groupnet_feature3.png"
                imagealt={data.section5__image1alt}
                heading="Transparent and forgiving"
                paragraph="Users frequently check the status of their claims so making them more glanceable was important. Additionally, a more forgiving claims process was designed for users that wish to correct their submitted information or cancel actions."
              />
              ))}
              <ProjectFlow
                image1="groupnet/groupnet_flow1.png"
                image1alt=""
                image2="groupnet/groupnet_flow2.png"
                image2alt=""
                image3="groupnet/groupnet_flow3.png"
                image3alt=""
                bgimage="groupnet/groupnet_flow_bg.png"
                caption="Originally a web view in v1 of the app, I redesigned and condensed the Make a Claim flow for a more consistent and streamlined process"
              />
              <ProjectParagraph
                eyebrow="The Results"
                heading="A better benefits experience for all"
                paragraph="The improvements in usability, visual design and practicality all contribute to an easier and more seamless plan member experience. Try it out for yourself in the interactive prototype below."
                button_link=""
                button_text=""
              />
              <div className="groupnet__prototype">
                <div className="video-container">
                  <ProjectImage
                    size="wide"
                    image=""
                    imagealt=""
                    embed="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fec6CU7RA1kuS4RsaQDaqck%2FGroupNet-Mobile-New-Designs%3Fnode-id%3D75%253A1425%26viewport%3D545%252C152%252C0.04620787873864174%26scaling%3Dscale-down&chrome=DOCUMENTATION"
                    caption=""
                  />
                </div>
              </div>
              <div className="groupnet__prototype-link">
                <Button
                  text="View the Prototype"
                  link="https://www.figma.com/proto/ec6CU7RA1kuS4RsaQDaqck/GroupNet-Mobile-New-Designs?node-id=75%3A1425&viewport=545%2C152%2C0.04620787873864174&scaling=scale-down"
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
