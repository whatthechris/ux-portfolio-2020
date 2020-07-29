import React from "react"
import Fade from 'react-reveal/Fade'
import staticdata from "../../staticdata.json"

import { Title, Meta, Link } from 'react-head';
import favicon16 from "../images/site-icon-16.png";
import favicon32 from "../images/site-icon-32.png";
import favicon64 from "../images/site-icon-64.png";

import "./styles/wayfinder.scss"
import Menu from "../components/menu"
import Logo from "../components/logo.js"
import ProjectHero from "../components/project_hero.js"
import ProjectHighlights from "../components/project_highlights.js"
import ProjectParagraph from "../components/project_paragraph.js"
import ProjectSmallImage from "../components/project_small-image.js"
import ProjectFeature from "../components/project_feature.js"
import PullQuote from "../components/pull_quote"
import ProjectNext from "../components/project_next.js"

const WayfinderPage = () => (
    <div>
      <Title>Chris Wong – Wayfinder</Title>
      <Meta name="robots" content="noindex, nofollow" />
      <Link rel="icon" type="image/png" sizes="16x16" href={favicon16}/>
      <Link rel="icon" type="image/png" sizes="32x32" href={favicon32}/>
      <Link rel="shortcut icon" type="image/png" href={favicon64}/>
      <Logo/>
      <Menu/>
        <div className="overflow-container">
          <div className="page-container">
            {staticdata.wayfindercontent.map(data =>(
              <ProjectHero
                eyebrow={data.hero__eyebrow}
                title={data.hero__title}
                role1={data.hero__role1}
                role2={data.hero__role2}
                role3={data.hero__role3}
              />
            ))}
            <img id="wayfinder__hero-image" src={require(`../images/homepage/wayfinder_mockup.png`)}/>
            <div id="wayfinder__highlights">
              {staticdata.wayfindercontent.map(data =>(
                <ProjectHighlights 
                  icon1={data.highlights__icon1}
                  paragraph1={data.highlights__paragraph1}
                  icon2={data.highlights__icon2}
                  paragraph2={data.highlights__paragraph2}
                  icon3={data.highlights__icon3}
                  paragraph3={data.highlights__paragraph3}
                  image={data.highlights__image}
                />
              ))}
            </div>
            {staticdata.wayfindercontent.map(data =>(
              <ProjectParagraph
              eyebrow="The Challenge"
              heading={data.section1__heading1}
              paragraph={data.section1__paragraph1}
              />
            ))}
            {staticdata.wayfindercontent.map(data =>(
              <ProjectSmallImage
                image={data.section1__image1}
                imagealt={data.section1__image1alt}
                caption={data.section1__caption1}
              />
            ))}
            {staticdata.wayfindercontent.map(data =>(
              <ProjectParagraph
              eyebrow="The Approach"
              heading={data.section2__heading1}
              paragraph={data.section2__paragraph1}
              />
            ))}
            {staticdata.wayfindercontent.map(data =>(
              <ProjectSmallImage
                image={data.section2__image1}
                imagealt={data.section2__image1alt}
                caption={data.section2__caption1}
              />
            ))}
            {staticdata.wayfindercontent.map(data =>(
              <ProjectSmallImage
                image={data.section3__image1}
                imagealt={data.section3__image1alt}
                caption={data.section3__caption1}
              />
            ))}
          </div>
            {staticdata.wayfindercontent.map(data =>(
            <PullQuote
              pullquote={data.section4__pullquote1}
              name={data.section4__name1}
            />
            ))}
          </div>
          <div className="page-container">
            {staticdata.wayfindercontent.map(data =>(
              <ProjectParagraph
              eyebrow="The Solution"
              heading={data.section5__heading1}
              paragraph={data.section5__paragraph1}
              />
            ))}
            {staticdata.wayfindercontent.map(data =>(
              <ProjectFeature
                image={data.section5__image1}
                imagealt={data.section5__image1alt}
                heading="Personalized Plans"
                paragraph={data.section5__caption1}
              />
            ))}
            {staticdata.wayfindercontent.map(data =>(
              <ProjectFeature
                image={data.section5__image2}
                imagealt={data.section5__image2alt}
                heading="Growth Projections"
                paragraph={data.section5__caption2}
              />
            ))}
            {staticdata.wayfindercontent.map(data =>(
              <ProjectFeature
                image={data.section5__image3}
                imagealt={data.section5__image3alt}
                heading="Peace of mind & reassurance"
                paragraph={data.section5__caption3}
              />
            ))}
            {staticdata.wayfindercontent.map(data =>(
              <ProjectParagraph
                eyebrow="The Results"
                heading={data.section6__heading1}
                paragraph={data.section6__paragraph1}
              />
            ))}
        </div>
      <div id="wayfinder__video-container">
        <iframe src="https://player.vimeo.com/video/212916369" frameborder="0" allow="autoplay; fullscreen" allowfullscreen title="Wayfinder marketing video"></iframe>
      </div>
      {staticdata.wayfindercontent.map(data =>(
              <ProjectNext
                link="/groupnet"
                image="homepage/groupnet_mockup.png"
                imagealt=""
                eyebrow="Next Project"
                heading="GroupNet Mobile"
              />
      ))}
    </div>
)

export default WayfinderPage
