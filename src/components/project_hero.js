import React from "react"
import "./styles/project_hero.scss"

import {motion} from 'framer-motion';

const container = {
  visible: {
      transition: {
          delay:0,
        staggerChildren: 0.1,
      }
    },
  exit:{
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
      x: 40, 
      opacity: 0,
      transition: {
          duration: 0.1, ease: "easeIn"
          }
   },
};

const ProjectHero = props => (
    <motion.div className="project-hero" initial="hidden" animate="visible" exit="exit" variants={container}>
        <div className="project-hero__text">
          <div className={'project-hero__heading ' + (props.narrowheading ? 'project-hero__heading-narrow' : '')}>
            <motion.h1 className="display-heading" variants={item} >{props.title}</motion.h1>
            <motion.h4 variants={item}>{props.eyebrow}</motion.h4>
          </div>
          {props.role1 &&
            <motion.ul className="project-hero__list" variants={item}>
                <li><p className="caption">{props.role1}</p></li>
                <li><p className="caption">{props.role2}</p></li>
                <li><p className="caption">{props.role3}</p></li>
            </motion.ul>
          }
        </div>
      </motion.div>
)

export default ProjectHero