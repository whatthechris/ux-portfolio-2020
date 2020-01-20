import React from "react"
import ImageZoom from 'react-medium-image-zoom'

import Button from "./button.js"
import "./styles/project_full-width.scss"

const FullWidth = props => (
  <div className={"grid " + (props.heading ? 'full-width' : 'full-width-notext')}>
    <div className={(props.small_image ? 'full-width__small-container ' : 'full-width__container ') + (props.leftlayout ? 'full-width__small-container-left' : '')}>
      {props.image &&
        <ImageZoom
        image={{
          src: require('../images/' + props.image),
          alt: '',
          style: { width:'100%' }
        }}
        zoomMargin="0"
        />
      }
      {props.embed &&
        <div className="full-width__container-embed"
        data-sal="slide-up"
        data-sal-duration="500"
        data-sal-easing="ease">
          <iframe src={props.embed} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
      }
      <div className={"caption " + (props.leftlayout ? 'full-width__caption full-width__caption-right' : 'full-width__caption')}
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-easing="ease">{props.caption}</div>
    </div>
    {props.heading &&
    <div className={"full-width__text " + (props.leftlayout ? 'full-width__text-left' : '')}
    data-sal="slide-up"
    data-sal-duration="500"
    data-sal-easing="ease">
      <h3 className="full-width__heading">{props.heading}</h3>
      <p className="full-width__paragraph">{props.paragraph}</p>
      {props.button_text &&
        <div className="full-width__button">
          <Button
            button_link={props.button_link}
            button_text={props.button_text}
          />
        </div>
      }
    </div>
    }
  </div>
)

export default FullWidth