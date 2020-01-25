import React from "react"
import Fade from 'react-reveal/Fade'
import ImageZoom from 'react-medium-image-zoom'

import "./styles/project_images-section.scss"

const ImagesSection = props => (
  <div className="images-section grid">
      {props.image1 &&
        <Fade bottom>
          <div className={props.leftlayout ? 'images-section__top-container' : 'images-section__top-container images-section__top-container-right'}>
            <ImageZoom image={{
              src: require('../images/' + props.image1),
              alt: '',
              style: { width:'100%' }
              }}
              zoomMargin="0"
            />
              <p className="images-section__caption caption">{props.caption1}</p>
          </div>
        </Fade>
      }

      {props.embed1 &&
        <Fade bottom>
          <div className={props.leftlayout ? 'images-section__top-container' : 'images-section__top-container images-section__top-container-right'}>
            <iframe src={props.embed1} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            <p className="images-section__caption caption">{props.caption1}</p>
          </div>
        </Fade>
      }
      {props.image2 &&
        <Fade bottom>
          <div className={props.leftlayout ? 'images-section__bottom-container' : 'images-section__bottom-container images-section__bottom-container-right'}>
            <ImageZoom image={{
                src: require('../images/' + props.image2),
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
        </Fade>
      }
      {props.embed2 &&
        <Fade bottom>
          <div className={props.leftlayout ? 'images-section__bottom-container' : 'images-section__bottom-container images-section__bottom-container-right'}>
            <iframe src={props.embed2} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            <p className="images-section__caption caption">{props.caption2}</p>
          </div>
        </Fade>
      }
  </div>
)

export default ImagesSection