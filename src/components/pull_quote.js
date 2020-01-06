import React from "react"

import "./styles/pull_quote.scss"

const PullQuote = props => (
    <div className="pull-quote grid">
        <p className="pull-quote__global">
            {props.pullquote}
        </p>
    </div>
)

export default PullQuote
