import React from "react"

import "./styles/footer.scss"

const Footer = () => (
    <div className="footer" id="footer">
        <div className="footer__content page-container grid">
            <div className="footer__content-left">
                <h2>Let's grab a coffee!</h2>
                <p>hello@peoploverpixels.ca</p>
            </div>
            <div className="footer__content-right">
                <h4>A bit about this site</h4>
                <p>As a personal challenge, I planned to build this site as a web app using React. Keeping this in mind, I created a design system  in Figma so that I could directly translate the design components into React components. Since accessibilty and inclusive design is important <a href="https://accessibilitycanada.ca/web-accessibility-ontario-law/">(especially in Canada)</a>, this site is also WCAG 2.0 Level AA compliant.</p>
            </div>
        </div>
    </div>
)

export default Footer