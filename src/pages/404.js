import React from "react"
import { Title, Meta } from 'react-head';
import Menu from "../components/menu.js"

import "./styles/404.scss"

const NotFoundPage = () => (
  <div>
    <Title>404</Title>
    <Meta name="robots" content="noindex, nofollow" />
    <Menu/>
    <div className="missing">
      <div className="missing__text">
        <span>¯\_(ツ)_/¯</span>
        <h2>404 Page not found</h2>
        <p>Oh hi, seems like the page you're looking for doesn't exist. Click the menu button and let's get you back on track.</p>
      </div>
    </div>
  </div>
)

export default NotFoundPage
