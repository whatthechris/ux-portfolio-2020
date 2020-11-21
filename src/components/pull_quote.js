import React from "react"
import RevealAnimation from "./reveal_animation"

import "./styles/pull_quote.scss"

const PullQuote = props => (
        <div className="pull-quote">
            <RevealAnimation>
                <div className="pull-quote__text">
                    <p className="pull-quote__global">{props.pullquote}</p>
                    <p className="pull-quote__author">{props.name}</p>
                </div>
            </RevealAnimation>
        </div>
)

export default PullQuote
