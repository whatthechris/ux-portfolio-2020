import React from "react"
import Fade from 'react-reveal/Fade'
import staticdata from "../../staticdata.json"
import { Title, Meta } from 'react-head';

import "./styles/innovationawards.scss"
import ProjectHero from "../components/project_hero.js"
import ProjectHighlights from "../components/project_highlights.js"
import Menu from "../components/menu"
import PullQuote from "../components/pull_quote"
import FullWidth from "../components/project_full-width"
import VideosSection from "../components/project_videos-section"
import Footer from "../components/footer.js"

const CIAPage = () => (
    <div className="cia">
      <Title>Chris Wong – Innovation Awards</Title>
      <Meta name="robots" content="noindex, nofollow" />
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
      <div className="cia__hero-bg"></div>
        <div>
          <Fade bottom>
            <div className="section-title">
              <h5>Project Highlights</h5>
            </div>
          </Fade>
          <div className="page-container">
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
        </div>
        <div className="cia__case-study">
          <Fade bottom>
            <div className="section-title">
              <h5>Full Case Study</h5>
            </div>
          </Fade>
          <div className="page-container cia__container">
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
            name={data.section2__name1}
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
          <PullQuote
            pullquote={data.section5__pullquote1}
            name={data.section5__name1}
          />
          ))}
          {staticdata.awardscontent.map(data =>(
          <FullWidth
            embed={data.section6__embed1}
            caption={data.section6__caption1}
          />
          ))}
          {staticdata.awardscontent.map(data =>(
          <FullWidth
            heading={data.section7__heading1}
            paragraph={data.section7__paragraph1}
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
