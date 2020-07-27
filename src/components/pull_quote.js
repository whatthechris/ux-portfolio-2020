import React from "react"
import Fade from 'react-reveal/Fade'

import "./styles/pull_quote.scss"

const PullQuote = props => (
    <Fade bottom distance="100px">
        <div className="pull-quote grid">
            <p className="pull-quote__global">{props.pullquote}</p>
            <br/>
            <p className="pull-quote__author">{props.name}</p>
        </div>
    </Fade>
)

export default PullQuote
