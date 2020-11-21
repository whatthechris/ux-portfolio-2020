import React from "react"
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate(0px, 100px);
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const RevealAnimation = ({children}) => (
    <Reveal keyframes={customAnimation}>
      {children}
    </Reveal>
  )

export default RevealAnimation