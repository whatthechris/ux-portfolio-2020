import React from "react"

import "./styles/play_pause_button.scss"

class PlayPauseButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isPaused: true
        }
        this.buttonClick = this.buttonClick.bind(this);
    }
    buttonClick(){
        this.setState({isPaused: !this.state.isPaused});
        this.props.onClick()
    }
    render(){
    return(
    <button className="play-pause-button" onClick={this.buttonClick}>
        {this.state.isPaused && 
            <div className="play-pause-button__content">
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 19H6V5H10V19ZM14 19V5H18V19H14Z"/>
                </svg>
                <p className="caption">Pause video</p>
            </div>
        }
        {!this.state.isPaused && 
            <div className="play-pause-button__content">
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M8 5V19L19 12L8 5Z"/>
                </svg>
                <p className="caption">Play video</p>
            </div>
        }
    </button>
    )
    };
}

export default PlayPauseButton