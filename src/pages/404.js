import React from "react"
import { HeadProvider, Title, Meta } from 'react-head';
import Menu from "../components/menu.js"

const NotFoundPage = () => (
  <HeadProvider>
    <Title>404</Title>
    <Meta name="robots" content="noindex, nofollow" />
    <Menu/>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </HeadProvider>
)

export default NotFoundPage
