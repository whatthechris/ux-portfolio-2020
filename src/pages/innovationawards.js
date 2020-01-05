import React from "react"
import { Link } from "gatsby"

import staticdata from "../../staticdata.json"

import "./styles/innovationawards.scss"
import ProjectHero from "../components/project_hero.js"
import ProjectHighlights from "../components/project_highlights.js"
import ProjectWide from "../components/project_wide.js"
import Menu from "../components/menu"

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
        <div className="cia-project__highlights-title">Full Case Study</div>
      <ProjectWide
        photo={require('../images/cia/cia_photo3.png')}
        caption="As the attendees arrived, a countdown was project on the walls until they were directed to take their seats"
        heading="01 – Humble beginnings"
        paragraph="In 2010, Techvibes started the Canadian Startup Awards as a community-nominated and community-voted award program to celebrate the emerging tech innovation taking place across the country. Always with the intention of bringing the flourishing Canadian tech community together, the previously online awards were hosted in the real world for the first time at the Steam Whistle Brewery in 2017. The IRL (In Real Life) awards ceremony and after-party was a huge success but this was only the beginning..."
      />
    </div>
)

export default CIAPage
