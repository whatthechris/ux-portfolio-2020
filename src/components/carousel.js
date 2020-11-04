import React from 'react';
import { Link } from "gatsby"
import "./styles/carousel.scss"
import ProgressiveImage from "react-progressive-image";

import {motion} from 'framer-motion';

const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9]};

const container = {
    visible: {
        transition: {
            delay:0,
          staggerChildren: 0.1,
        }
      },
    exit:{
        pointerEvents: "none",
        transition: {
          staggerChildren: 0.1,
        }
    }
  };

const item = {
    hidden: { x: -40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5, ease: "easeOut"
        }
    },
    exit:{ 
        x: 80, 
        opacity: 0,
        transition: {
            duration: 0.5, ease: "easeIn"
            }
     },
};

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
            <motion.div className="carousel__text" initial="hidden" animate="visible" exit="exit" variants={container}>
                <div className="carousel__links" onMouseOver={this.pauseCarousel} onMouseLeave={this.playCarousel} onFocus={this.pauseCarousel} onBlur={this.playCarousel}>
                    <motion.div variants={item}>
                        <Link to="/wayfinder" id="wayfinder-link" className={this.state.currentslide === 0 ? 'display-heading active-link' : 'display-heading inactive-link'}
                            onMouseOver={this.setSlide(0)} onFocus={this.setSlide(0)}
                        >Wayfinder</Link>
                    </motion.div>
                    <motion.div variants={item}>
                        <Link to="/groupnet" id="groupnet-link" className={this.state.currentslide === 1 ? 'display-heading active-link' : 'display-heading inactive-link'}
                            onMouseOver={this.setSlide(1)} onFocus={this.setSlide(1)}
                        >GroupNet Mobile</Link>
                    </motion.div>
                    <motion.div variants={item}>
                        <Link to="/pcoptimum" id="pcoptimum-link" className={this.state.currentslide === 2 ? 'display-heading active-link' : 'display-heading inactive-link'}
                            onMouseOver={this.setSlide(2)} onFocus={this.setSlide(2)}
                        >PC Optimum</Link>
                    </motion.div>
                </div>
                <motion.div className="carousel__progress" exit={{opacity:0}}>
                    <div className={this.state.progress == false ? 'carousel__progress-bar' : 'carousel__progress-bar carousel__progress-animation'}></div>
                </motion.div>
                <motion.div className="carousel__more" exit={{opacity:0}}>
                    <h5>More case studies coming soon</h5>
                </motion.div>
            </motion.div>
            {this.state.currentslide === 0 &&
                <ProgressiveImage
                    src={require(`../images/homepage/wayfinder_mockup.png`)}
                    placeholder={require(`../images/homepage/wayfinder_mockup_compressed.webp`)}
                >
                    {(src) => (
                        <motion.img 
                            id="wayfinder-mockup" 
                            src={src}
                            initial={{
                                y: 20,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            exit={{
                                top: '160px',
                                left: '50%',
                                x: '-50%',
                                height: '100vh',
                            }}
                            transition={transition}
                        />
                    )}
                </ProgressiveImage>
            }
            {this.state.currentslide === 1 &&
                <ProgressiveImage
                    src={require(`../images/homepage/groupnet_mockup.png`)}
                    placeholder={require(`../images/homepage/groupnet_mockup_compressed.webp`)}
                >
                    {(src) => (
                        <motion.img 
                            id="groupnet-mockup" 
                            src={src}
                            initial={{
                                y: 20,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            exit={{
                                top: '260px',
                                left: '55%',
                                x: '-45%',
                                height: '100vh',
                            }}
                            transition={transition}
                        />
                    )}
                </ProgressiveImage>
            }
            {this.state.currentslide === 2 &&
                <ProgressiveImage
                    src={require(`../images/homepage/pcoptimum_mockup.png`)}
                    placeholder={require(`../images/homepage/pcoptimum_mockup_compressed.webp`)}
                >
                    {(src) => (
                        <motion.img 
                            id="pcoptimum-mockup" 
                            src={src}
                            initial={{
                                y: 20,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            exit={{
                                top: '250px',
                                left: '55%',
                                x: '-45%',
                                height: '85vh',
                                transition: {...transition},
                            }}
                            transition={transition}
                        />
                    )}
                </ProgressiveImage>
            }
        </div>
    )
    };
}

export default Carousel