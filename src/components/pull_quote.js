import React from "react"
import Fade from 'react-reveal/Fade'

import "./styles/pull_quote.scss"

const PullQuote = props => (
        <div className="pull-quote">
            <Fade bottom distance="100px">
                <div className="pull-quote__text">
                    <p className="pull-quote__global">{props.pullquote}</p>
                    <p className="pull-quote__author">{props.name}</p>
                </div>
            </Fade>
        </div>
)

export default PullQuote
