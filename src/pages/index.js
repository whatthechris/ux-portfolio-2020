import React from "react"

import staticdata from "../../staticdata.json"

import "./styles/homepage.scss"
import Menu from "../components/menu.js"
import Logo from "../components/logo.js"

import { Title, Meta, Link } from 'react-head';
import favicon16 from "../images/site-icon-16.png";
import favicon32 from "../images/site-icon-32.png";
import favicon64 from "../images/site-icon-64.png";

class IndexPage extends React.Component {
  render() {
    return(
      <div className="homepage">
        <Title>Chris Wong Portfolio</Title>
        <Meta name="robots" content="noindex, nofollow" />
        <Link rel="icon" type="image/png" sizes="16x16" href={favicon16}/>
        <Link rel="icon" type="image/png" sizes="32x32" href={favicon32}/>
        <Link rel="shortcut icon" type="image/png" href={favicon64}/>
        <Logo/>
        <Menu/>
      </div>
    )
  };
}

export default IndexPage
