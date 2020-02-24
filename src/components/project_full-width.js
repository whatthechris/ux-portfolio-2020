import React from "react"
import ImageZoom from 'react-medium-image-zoom'
import Fade from 'react-reveal/Fade'

import Button from "./button.js"
import "./styles/project_full-width.scss"

const FullWidth = props => (
  <div className={"grid " + (props.heading ? 'full-width' : 'full-width-notext')}>
    <Fade bottom distance="100px">
      <div className={(props.small_image ? 'full-width__small-container ' : 'full-width__container ') + (props.leftlayout ? 'full-width__small-container-left' : '')}>
        {props.image &&
          <ImageZoom
          image={{
            src: require('../images/' + props.image),
            alt: props.imagealt,
            style: { width:'100%' }
          }}
          zoomMargin="0"
          />
        }
        {props.embed &&
          <div className={"full-width__container-embed " + (props.prototype ? 'full-width__container-prototype' : '')}>
            <iframe src={props.embed} frameborder="0" allow="autoplay; fullscreen; microphone" allowfullscreen></iframe>
          </div>
        }
        <div className={"caption " + (props.leftlayout ? 'full-width__caption full-width__caption-right' : 'full-width__caption')}>
          {props.caption}
        </div>
      </div>
    </Fade>
    {props.heading &&
    <Fade bottom distance="100px">
      <div className={"full-width__text " + (props.leftlayout ? 'full-width__text-left' : '')}>
        <h3 className="full-width__heading">{props.heading}</h3>
        <p className={"full-width__paragraph " + (props.button_text ? 'full-width__paragraph-button' : '')}>{props.paragraph}</p>
        {props.button_text &&
          <div className="full-width__button">
            <Button
              button_link={props.button_link}
              button_text={props.button_text}
            />
          </div>
        }
      </div>
    </Fade>
    }
  </div>
)

export default FullWidth