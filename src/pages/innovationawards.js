import React from "react"
import { Link } from "gatsby"

import staticdata from "../../staticdata.json"

import "./styles/innovationawards.scss"
import ProjectHero from "../components/project_hero.js"
import ProjectHighlights from "../components/project_highlights.js"
import ProjectWide from "../components/project_wide.js"
import Menu from "../components/menu"
import PullQuote from "../components/pull_quote"

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
      />
      ))}
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
      <div className="cia__section-title">Full Case Study</div>
      {staticdata.awardscontent.map(data =>(
      <ProjectWide
        heading={data.project__heading1}
        paragraph={data.project__paragraph1}
        image={data.project__image1}
        caption={data.project__caption1}
      />
      ))}
      {staticdata.awardscontent.map(data =>(
      <PullQuote
        pullquote={data.project__pullquote1}
      />
      ))}
    </div>
)

export default CIAPage
