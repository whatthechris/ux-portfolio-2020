import React from "react"
import { Title, Meta } from 'react-head';
import Menu from "../components/menu.js"
import Button from "../components/button.js"

import "./styles/404.scss"

const NotFoundPage = () => (
  <div>
    <Title>404</Title>
    <Meta name="robots" content="noindex, nofollow" />
    <Menu/>
    <div className="missing">
      <span>¯\_(ツ)_/¯</span>
      <div className="missing__text">
        <h2>404 Page not found</h2>
        <p>Oh hi, seems like the page you're looking for doesn't exist. Click the button below and let's get you back on track.</p>
      </div>
      <Button
          text="Back to Homepage"
          link="/"
        />
    </div>
  </div>
)

export default NotFoundPage
