import React from 'react';

import "./styles/carousel.scss"

class Carousel extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
          currentslide: 0,
          totalslides: 3,
          progress: true,
        };
      }

    playCarousel = () => {
        this.interval = setInterval(() => 
            this.setState({ currentslide: this.state.currentslide + 1},
                () => {
                    if (this.state.currentslide >= this.state.totalslides){
                        this.setState({ currentslide: 0 });
                    }
                }
        ), 5000);
        this.setState({ progress: true }); 
        } 
    ;

    pauseCarousel = () => {
        clearInterval(this.interval)
        this.setState({ progress: false });    
        }
    ;

    componentDidMount() {
        this.playCarousel();
    }
    componentWillUnmount() {
        this.pauseCarousel();
    }
    
    setSlide = slideId => () => {
        this.setState({ currentslide: slideId });
      };


    render(){
    return(
        <div className="carousel">
            <div className="carousel__text">
                <div className="carousel__links" onMouseOver={this.pauseCarousel} onMouseLeave={this.playCarousel}>
                    <a href="/wayfinder" id="wayfinder-link" className={this.state.currentslide === 0 ? 'display-heading active-link' : 'display-heading inactive-link'}
                        onMouseOver={this.setSlide(0)}
                    >Wayfinder</a>
                    <a href="/groupnet" id="groupnet-link" className={this.state.currentslide === 1 ? 'display-heading active-link' : 'display-heading inactive-link'}
                        onMouseOver={this.setSlide(1)}
                    >GroupNet Mobile</a>
                    <a href="/pcoptimum" id="pcoptimum-link" className={this.state.currentslide === 2 ? 'display-heading active-link' : 'display-heading inactive-link'}
                        onMouseOver={this.setSlide(2)}
                    >PC Optimum</a>
                </div>
                <div className="carousel__progress">
                    <div className={this.state.progress == false ? 'carousel__progress-bar' : 'carousel__progress-bar carousel__progress-animation'}></div>
                </div>
                <div className="carousel__more">
                    <h5>More case studies coming soon</h5>
                    {/* <div className="homepage__dot">
                        <div className="homepage__dot-circle"></div>
                        <div className="homepage__dot-circle"></div>
                        <div className="homepage__dot-circle"></div>
                    </div> */}
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