import React from "react"
import { Link } from "gatsby"

import "../data/page_styles.scss"
import HomepageHero from "../components/homepage_hero.js"
import PullQuote from "../components/pull_quote.js"
import ProjectCard from "../components/project_card.js"

const IndexPage = () => (
    <div>
      <HomepageHero />
      <div className="page--container">
        <PullQuote />
        <ProjectCard />
      </div>
    </div>
)

export default IndexPage
