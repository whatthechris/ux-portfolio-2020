import React from "react"
import ImageZoom from 'react-medium-image-zoom'

import "./styles/project_images-section.scss"

const ImagesSection = props => (
  <div className="images-section grid">

      {props.image1 &&
        <div className={props.leftlayout ? 'images-section__top-container' : 'images-section__top-container images-section__top-container-right'} data-sal="slide-up"
        data-sal-duration="500"
        data-sal-easing="ease">
          <ImageZoom
        image={{
          src: require('../images/' + props.image),
          alt: '',
          style: { width:'100%' }
        }}
        zoomMargin="0"
      />
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
          <ImageZoom
        image={{
          src: props.image,
          alt: 'Golden Gate Bridge',
          className: 'img',
          style: { width:'100%' }
        }}
        zoomImage={{
          src: props.image,
          alt: 'Golden Gate Bridge'
        }}
      />
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