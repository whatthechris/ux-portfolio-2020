import React from "react"
import Fade from 'react-reveal/Fade'
import ImageZoom from 'react-medium-image-zoom'

import "./styles/project_images-section.scss"

const ImagesSection = props => (
  <div className="images-section grid">
      <Fade bottom distance="100px">
        <div className="images-section__text">
          <h3 className="images-section__heading">{props.heading}</h3>
          <p>{props.paragraph}</p>
        </div>
      </Fade>
      {props.image1 &&
        <Fade bottom>
          <div className="images-section__container-top">
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
      {props.image2 &&
        <Fade bottom>
          <div className="images-section__container-middle">
            <ImageZoom image={{
                src: require('../images/' + props.image2),
                alt: '',
                className: 'img',
                style: { width:'100%' }
              }}
            />
            <p className="images-section__caption caption">{props.caption2}</p>
          </div>
        </Fade>
      }
      {props.image3 &&
        <Fade bottom>
          <div className="images-section__container-bottom">
            <ImageZoom image={{
                src: require('../images/' + props.image3),
                alt: '',
                className: 'img',
                style: { width:'100%' }
              }}
            />
            <p className="images-section__caption caption">{props.caption3}</p>
          </div>
        </Fade>
      }
  </div>
)

export default ImagesSection