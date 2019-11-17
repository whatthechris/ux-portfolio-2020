import React from "react"
import { Link } from "gatsby"

import "../data/page_styles.scss"
import "./styles/homepage.scss"
import HomepageHero from "../components/homepage_hero.js"
import PullQuote from "../components/pull_quote.js"
import ProjectCard from "../components/project_card.js"
import Footer from "../components/footer.js"

const IndexPage = () => (
    <div>
      <HomepageHero />
      <div className="page-container">
        <PullQuote />
        <ProjectCard 
          eyebrow="Wayfinder Web App"
          heading="Helping hard working people save for the good life"
          textlink="View case study"
          thumbnail={require('../images/homepage/wayfinder_thumb.png')}
          sand="true"
        />
        <div className="small-cards">
          <ProjectCard 
            smallcard="true"
            eyebrow="PC Optimum Web App"
            heading="Levelling up Loblaw's loyalty points game"
            textlink="View case study"
            thumbnail={require('../images/homepage/pcoptimum_thumb.png')}
            sand="true"
          />
          <ProjectCard 
            smallcard="true"
            eyebrow="The Canadian Innovation Awards"
            heading="Celebrating Canadian tech innovation"
            textlink="View case study"
            thumbnail={require('../images/homepage/cia_thumb.png')}
            moss="true"
          />
          <ProjectCard 
            smallcard="true"
            eyebrow="Various Motion Design Projects"
            heading="Communicating complex ideas through motion"
            textlink="View projects"
            thumbnail={require('../images/homepage/wayfinder_thumb.png')}
            earth="true"
          />
        </div>
      </div>
      <Footer />
    </div>
)

export default IndexPage
