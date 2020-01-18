import React from "react"
import ImageZoom from 'react-medium-image-zoom'

import Button from "./button.js"
import "./styles/project_full-width.scss"

const FullWidth = props => (
  <div className={"grid " + (props.heading ? 'full-width' : 'full-width-notext')}>
    {props.heading &&
    <div className="full-width__text"
    data-sal="slide-up"
    data-sal-duration="500"
    data-sal-easing="ease">
      <h3 className="full-width__heading">{props.heading}</h3>
      <p className="full-width__paragraph">{props.paragraph}</p>
      {props.button_text &&
          <Button
            button_link={props.button_link}
            button_text={props.button_text}
          />
      }
    </div>
    }
    {props.image &&
      <div className="full-width__container"
      data-sal="slide-up"
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
      </div>
    }
    {props.embed &&
      <div className="full-width__container full-width__container-embed"
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-easing="ease">
        <iframe src={props.embed} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
    }
    <div className={"caption " + (props.leftlayout ? 'full-width__caption' : 'full-width__caption full-width__caption-right')}
    data-sal="slide-up"
    data-sal-duration="500"
    data-sal-easing="ease">{props.caption}</div>
  </div>
)

export default FullWidth