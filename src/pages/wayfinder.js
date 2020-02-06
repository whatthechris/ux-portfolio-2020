import React from "react"
import Fade from 'react-reveal/Fade'
import staticdata from "../../staticdata.json"

import "./styles/wayfinder.scss"
import Menu from "../components/menu"
import ProjectHero from "../components/project_hero.js"
import ProjectHighlights from "../components/project_highlights.js"
import ImageSection from "../components/project_images-section"
import VideosSection from "../components/project_videos-section"
import FullWidth from "../components/project_full-width"
import Footer from "../components/footer.js"

const WayfinderPage = () => (
    <div className="wayfinder">
      <Menu/>
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
      />
      ))}
      <div className="wayfinder__hero-bg"></div>

        <div className="wayfinder__highlights">
          <Fade bottom>
            <div className="section-title">
              <h5>Project Highlights</h5>
            </div>
          </Fade>
          <div className="page-container">
            {staticdata.wayfindercontent.map(data =>(
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
        <div className="wayfinder__case-study">
          <Fade bottom>
            <div className="section-title">
              <h5>Full Case Study</h5>
            </div>
          </Fade>
          <div className="page-container">
            {staticdata.wayfindercontent.map(data =>(
            <FullWidth
              leftlayout={true}
              small_image={true}
              heading="01 - That's a future me problem"
              paragraph="Great West Life is one of Canada’s largest group retirement and benefit providers allowing millions of Canadians to use their employer’s benefits packages. However, they noticed that many of their plan members weren’t taking advantage of their company’s RRSP contribution matching program thereby leaving “free money” on the table. Upon future investigation this seemed to stem from a larger problem which was that many plan members either weren’t saving for their retirement or didn’t have access to good financial advice to help with their retirement planning."
              image={data.section1__image1}
              caption={data.section1__caption1}
            />
            ))}
            {staticdata.wayfindercontent.map(data =>(
            <FullWidth
              heading="02 - Let's talk money"
              paragraph="Working concurrently with Deloitte’s Doblin team, we gathered initial research in two waves of plan member and sponsor interviews. In these interviews, we asked questions about how Canadians view their finances/ retirement and how they seek financial advice. We found that some were getting generic advice from their bank while others were even turned down by financial advisors because they didn’t have enough savings to be considered a worthwhile client. Alternatively, some took matters into their own hands by creating their own spreadsheets but many felt like they didn’t have time to educate themselves, do research, create a plan or shop around and compare advisors. The process of planning for their retirement seemed full of pain points so it was clear that we could design a better solution."
              image={data.section2__image1}
              caption={data.section2__caption1}
            />
            ))}
            {staticdata.wayfindercontent.map(data =>(
            <FullWidth
              image={data.section3__image1}
              caption={data.section3__caption1}
            />
            ))}
            {staticdata.wayfindercontent.map(data =>(
            <ImageSection
              heading={data.section4__heading}
              paragraph={data.section4__paragraph}
              image1={data.section4__image1}
              caption1="First, users are taken through a natural language onboarding process where they fill out their account information, set a retirement goal and complete an Investment Personality Questionnaire (IPQ) to determine their investment risk appetite."
              image2={data.section4__image2}
              caption2="The Wealth Curve on the dashboard tracks the user’s retirement goal, along with other life goals and takes into account a variety of circumstantial changes in the market including shortfalls and surpluses.  The recommendations cards prompt users to maximize their employer’s RESP matching benefit and provide other self-directed advice."
              image3={data.section4__image3}
              caption3="If a user is ever uncertain, confused or unsure, a financial advisor is accessible via a floating action button. Once given permission from the user, the advisor can see the user’s screen in real time thereby reducing miscommunication."
              heading="03 - Like a crystal ball for your finances"
              paragraph1="From our research findings, we created three user personas Normal users, Pre-Retirees and H.E.N.R.Y.s (High Earners, Not Yet Rich). After many iterations of user journey maps, user stories, information architecture, wire framing, hi-fidelity designs, user testing and collaboration with our devs to work within technological constraints, Wayfinder was born!"
            />
            ))}
            {staticdata.awardscontent.map(data =>(
            <FullWidth
              heading="04 - "
              paragraph="Throughout the testing of the final designs, the users clearly felt empowered and more confident about planning their retirement. GWL's business also benefits by positioning itself as the financial provider for wealth products and eventually protection, retirement income and cash flow products as well. This was mainly due to our successfully integration of low-touch self-directed and high-touch advisor guidance into one cohesive experience. Finally, all our efforts paid off as Wayfinder was well received by both GWL stakeholders and members at launch. The Wayfinder functionality has since been absorbed by the main GWL app."
            />
            ))}
          </div>
        </div>
      <div className="wayfinder__video-container">
        <iframe src="https://player.vimeo.com/video/212916369" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
      <Footer />
    </div>
)

export default WayfinderPage
