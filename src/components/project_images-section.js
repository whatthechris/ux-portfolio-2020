import React from "react"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import "./styles/project_images-section.scss"

const ImagesSection = props => (
  <div className="images-section grid">

      {props.image1 &&
        <div className={props.leftlayout ? 'images-section__top-container' : 'images-section__top-container images-section__top-container-right'} data-sal="slide-up"
        data-sal-duration="500"
        data-sal-easing="ease">
          <Zoom>
            <img src={require(`../images/${props.image1}`)} style={{width:'100%'}}/>
          </Zoom>
          <p className="images-section__caption caption">{props.caption1}</p>
        </div>
      }

      {props.embed1 &&
        <div className={props.leftlayout ? 'images-section__top-container' : 'images-section__top-container images-section__top-container-right'} data-sal="slide-up"
        data-sal-duration="500"
        data-sal-easing="ease">
          <iframe src={props.embed1} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          <p className="images-section__caption caption">{props.caption1}</p>
        </div>
      }
      {props.image2 &&
        <div className={props.leftlayout ? 'images-section__bottom-container' : 'images-section__bottom-container images-section__bottom-container-right'}
        data-sal="slide-up"
        data-sal-duration="500"
        data-sal-delay="200"
        data-sal-easing="ease">
          <Zoom>
            <img src={require(`../images/${props.image2}`)} style={{width:'100%'}}/>
          </Zoom>
          <p className="images-section__caption caption">{props.caption2}</p>
        </div>
      }
      {props.embed2 &&
        <div className={props.leftlayout ? 'images-section__bottom-container' : 'images-section__bottom-container images-section__bottom-container-right'} data-sal="slide-up"
        data-sal-duration="500"
        data-sal-easing="ease">
          <iframe src={props.embed2} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          <p className="images-section__caption caption">{props.caption2}</p>
        </div>
      }
  </div>
)

export default ImagesSection