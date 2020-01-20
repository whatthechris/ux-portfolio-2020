import React from "react"
import { Link } from "gatsby"

import staticdata from "../../staticdata.json"

import "./styles/innovationawards.scss"
import ProjectHero from "../components/project_hero.js"
import ProjectHighlights from "../components/project_highlights.js"
import Menu from "../components/menu"
import PullQuote from "../components/pull_quote"
import FullWidth from "../components/project_full-width"
import ImagesSection from "../components/project_images-section"
import VideosSection from "../components/project_videos-section"
import Footer from "../components/footer.js"

const CIAPage = () => (
    <div className="cia">
      <Menu/>
      {staticdata.awardscontent.map(data =>(
        <ProjectHero
          eyebrow={data.hero__eyebrow}
          title={data.hero__title}
          role1={data.hero__role1}
          role2={data.hero__role2}
          role3={data.hero__role3}
          client={data.hero__client}
          thumbnail={data.hero__thumbnail}
      />
      ))}
      <div className="page-container">
        <div className="cia__highlights">
          <div className="section-title"
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="500"
          data-sal-easing="ease"
          ><h5>Project Highlights</h5></div>
          {staticdata.awardscontent.map(data =>(
            <ProjectHighlights 
              icon1={data.highlights__icon1}
              heading1={data.highlights__heading1}
              paragraph1={data.highlights__paragraph1}
              icon2={data.highlights__icon2}
              heading2={data.highlights__heading2}
              paragraph2={data.highlights__paragraph2}
              icon3={data.highlights__icon3}
              heading3={data.highlights__heading3}
              paragraph3={data.highlights__paragraph3}
              image={data.highlights__image}
              caption={data.highlights__caption}
            />
          ))}
        </div>
        <div className="cia__case-study">
          <div className="section-title"
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="500"
          data-sal-easing="ease">
            <h5>Full Case Study</h5>
          </div>
          {staticdata.awardscontent.map(data =>(
          <FullWidth
            leftlayout={true}
            small_image={true}
            heading={data.section1__heading1}
            paragraph={data.section1__paragraph1}
            image={data.section1__image1}
            caption={data.section1__caption1}
          />
          ))}
          {staticdata.awardscontent.map(data =>(
          <PullQuote
            pullquote={data.section2__pullquote1}
          />
          ))}
          {staticdata.awardscontent.map(data =>(
          <FullWidth
            heading={data.section3__heading2}
            paragraph={data.section3__paragraph2}
            embed={data.section3__embed1}
            caption={data.section3__caption1}
            button_link={data.section3__button_link1}
            button_text={data.section3__button1}
          />
          ))}
          {staticdata.awardscontent.map(data =>(
          <VideosSection
            embed1={data.section4__embed1}
            caption1={data.section4__caption1}
            embed2={data.section4__embed2}
            caption2={data.section4__caption2}
            embed3={data.section4__embed3}
            caption3={data.section4__caption3}
            heading={data.section4__heading1}
            paragraph1={data.section4__paragraph1}
            paragraph2={data.section4__paragraph2}
          />
          ))}
          {staticdata.awardscontent.map(data =>(
          <FullWidth
            embed={data.section5__embed1}
            caption={data.section5__caption1}
          />
          ))}
          {staticdata.awardscontent.map(data =>(
          <FullWidth
            heading={data.section6__heading1}
            paragraph={data.section6__paragraph1}
          />
          ))}
        </div>
      </div>
      <div className="cia__video-container">
        <iframe src="https://player.vimeo.com/video/341249926" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
      <Footer />
    </div>
)

export default CIAPage
