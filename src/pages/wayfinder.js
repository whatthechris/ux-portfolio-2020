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
import ImageSection from "../components/project_images-section"
import PullQuote from "../components/pull_quote"
import FullWidth from "../components/project_full-width"

const WayfinderPage = () => (
    <div>
      <Title>Chris Wong – Wayfinder</Title>
      <Meta name="robots" content="noindex, nofollow" />
      <Link rel="icon" type="image/png" sizes="16x16" href={favicon16}/>
      <Link rel="icon" type="image/png" sizes="32x32" href={favicon32}/>
      <Link rel="shortcut icon" type="image/png" href={favicon64}/>
      <Logo/>
      <Menu/>
          <div className="page-container">
            {staticdata.wayfindercontent.map(data =>(
              <ProjectHero
                eyebrow={data.hero__eyebrow}
                title={data.hero__title}
                role1={data.hero__role1}
                role2={data.hero__role2}
                role3={data.hero__role3}
                client={data.hero__client}
                thumbnail={data.hero__thumbnail}
                image={data.hero__image}
                narrowheading={true}
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
            <FullWidth
              leftlayout={true}
              small_image={true}
              heading={data.section1__heading1}
              paragraph={data.section1__paragraph1}
              image={data.section1__image1}
              imagealt={data.section1__image1alt}
              caption={data.section1__caption1}
            />
            ))}
            {staticdata.wayfindercontent.map(data =>(
            <FullWidth
              heading={data.section2__heading1}
              paragraph={data.section2__paragraph1}
              image={data.section2__image1}
              imagealt={data.section2__image1alt}
              caption={data.section2__caption1}
            />
            ))}
            {staticdata.wayfindercontent.map(data =>(
            <FullWidth
              image={data.section3__image1}
              imagealt={data.section3__image1alt}
              caption={data.section3__caption1}
            />
            ))}
            {staticdata.wayfindercontent.map(data =>(
            <PullQuote
              pullquote={data.section4__pullquote1}
              name={data.section4__name1}
            />
            ))}
            {staticdata.wayfindercontent.map(data =>(
            <ImageSection
              heading={data.section5__heading1}
              paragraph={data.section5__paragraph1}
              image1={data.section5__image1}
              image1alt={data.section5__image1alt}
              caption1={data.section5__caption1}
              image2={data.section5__image2}
              image2alt={data.section5__image2alt}
              caption2={data.section5__caption2}
              image3={data.section5__image3}
              image3alt={data.section5__image3alt}
              caption3={data.section5__caption3}
            />
            ))}
            {staticdata.wayfindercontent.map(data =>(
            <FullWidth
              leftlayout={true}
              heading={data.section6__heading1}
              paragraph={data.section6__paragraph1}
            />
            ))}
        </div>
      <div className="wayfinder__video-container">
        <iframe src="https://player.vimeo.com/video/212916369" frameborder="0" allow="autoplay; fullscreen" allowfullscreen title="Wayfinder marketing video"></iframe>
      </div>
    </div>
)

export default WayfinderPage
