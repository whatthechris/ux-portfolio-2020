import React from 'react';

import "./styles/carousel.scss"

class Carousel extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
          currentslide: 0,
          totalslides: 3,
        };
      }

    playCarousel = () =>
        this.interval = setInterval(() => 
            this.setState({ currentslide: this.state.currentslide + 1},
                () => {
                    if (this.state.currentslide >= this.state.totalslides){
                        this.setState({ currentslide: 0 });
                    }
                }
        ), 5000);
    ;

    pauseCarousel = () =>
        clearInterval(this.interval);
        
    ;

    componentDidMount() {
        this.playCarousel();
    }
    componentWillUnmount() {
        this.pauseCarousel();
    }

    setSlideZero = () =>
        this.setState({ currentslide: 0 });
    ;

    setSlideOne = () =>
        this.setState({ currentslide: 1 });
    ;

    setSlideTwo = () =>
        this.setState({ currentslide: 2 });
    ;

    render(){
    return(
        <div>
            <div className="carousel">
                <div className="carousel__links" onMouseOver={this.pauseCarousel} onMouseLeave={this.playCarousel}>
                    <a href="/wayfinder" id="wayfinder-link" className={this.state.currentslide === 0 ? 'display-heading active-link' : 'display-heading inactive-link'}
                        onMouseOver={this.setSlideZero}
                        onMouseLeave={this.setSlideZero}
                    >Wayfinder</a>
                    <a href="/groupnet" id="groupnet-link" className={this.state.currentslide === 1 ? 'display-heading active-link' : 'display-heading inactive-link'}
                        onMouseOver={this.setSlideOne}
                        onMouseLeave={this.setSlideOne}
                    >GroupNet Mobile</a>
                    <a href="/pcoptimum" id="pcoptimum-link" className={this.state.currentslide === 2 ? 'display-heading active-link' : 'display-heading inactive-link'}
                        onMouseOver={this.setSlideTwo}
                        onMouseLeave={this.setSlideTwo}
                    >PC Optimum</a>
                </div>
                <div className="carousel__progress">
                    <div id="progress" className="carousel__progress-bar"></div>
                </div>
                <div className="carousel__more">
                    <h5>More case studies coming soon</h5>
                    <div className="homepage__dot">
                    <div className="homepage__dot-circle"></div>
                    <div className="homepage__dot-circle"></div>
                    <div className="homepage__dot-circle"></div>
                    </div>
                </div>
            </div>
            {this.state.currentslide === 0 &&
                <img id="wayfinder-mockup" src={require(`../images/homepage/wayfinder_mockup.png`)}/>
            }
            {this.state.currentslide === 1 &&
                <img id="groupnet-mockup" src={require(`../images/homepage/groupnet_mockup.png`)}/>
            }
            {this.state.currentslide === 2 &&
                <img id="pcoptimum-mockup" src={require(`../images/homepage/pcoptimum_mockup.png`)}/>
            }
        </div>
    )
    };
}

export default Carousel