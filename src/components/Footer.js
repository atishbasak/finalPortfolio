import React from 'react'
import {
    Link
} from "react-router-dom";

export default function Footer() {
    return (
        <>

            <div className="pg-footer">
                <footer className="footer">
                    <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
                        <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
                    </svg>
                    <div className="footer-content">
                        <div className="footer-content-column">
                            <div className="footer-logo">
                                {/* <Link className="footer-logo-link" to="#">
                                    <span className="hidden-link-text">LOGO</span>
                                    <h1>LOGO</h1>
                                </Link> */}
                                <img src="./images/footer logo.png" alt="" />
                                <h1 className='footer-logo-text'><Link to="mailto:sample@gmail.com">sample@gmail.com</Link></h1>
                            </div>
                            <div className="footer-menu">
                                <h2 className="footer-menu-name"> Get Started</h2>
                                <ul id="menu-get-started" className="footer-menu-list">
                                    <li className='download-border'>
                                        <Link to="https://drive.google.com/file/d/1Dc4wgXk_eCm0JrIqVDFsXCqKa8opLvEW/view?usp=drive_link">Download CV</Link>
                                    </li>
                                    <li className='download-border'>
                                        <Link to="https://drive.google.com/file/d/1Dc4wgXk_eCm0JrIqVDFsXCqKa8opLvEW/view?usp=drive_link">Download Resume</Link>
                                    </li>
                                    <li className='resume-text-position'>
                                        <Link to="/Resume">Resume</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-content-column">
                            <div className="footer-menu">
                                <h2 className="footer-menu-name"> Connect</h2>
                                <ul id="menu-company" className="footer-menu-list">
                                    <li className="">
                                        <Link to="/Contact">Contact</Link>
                                    </li>
                                    {/* <li className="">
                                        <Link to="/About">About</Link>
                                    </li> */}
                                    <li className="hire-me-footer">
                                        <Link to="/Contact">Hire &nbsp;Me</Link>
                                        {/* Hire &nbsp;Me */}
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-menu">
                                <h2 className="footer-menu-name">Social Media Links</h2>
                                <ul id="menu-legal" className="footer-menu-list">
                                    <li className="blue-sq-filter">
                                        <Link to="https://www.facebook.com/share/QkywyR6Ar15dSpSx/?mibextid=qi2Omg"><img src="./images/facebook.png" alt="" className='footer-social-media-links-img'/></Link>
                                    </li>
                                    <li className="blue-sq-filter">
                                        <Link to="https://www.instagram.com/atish_basak?igsh=MWNlaHU1b2FyYXk5dQ=="><img src="./images/insta.png" alt="" className='footer-social-media-links-img'/></Link>
                                    </li>
                                    <li className="blue-sq-filter">
                                        <Link to="https://www.linkedin.com/home"><img src="./images/linked in.png" alt="" className='footer-social-media-links-img'/></Link>
                                    </li>
                                    <li className="blue-sq-filter">
                                        <Link to="https://x.com/?lang=en"><img src="./images/twitter.png" alt="" className='footer-social-media-links-img'/></Link>
                                    </li>
                                    {/* <li className="blue-sq-filter"blue-sq-filter>
                                        <Link to="#"><img src="" alt="" className='footer-social-media-links-img'/></Link>
                                    </li> */}
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="footer-content-column">
                            <div className="footer-menu blue-sq-filter">
                                <h2 className="footer-menu-name"> Quick Links</h2>
                                <ul id="menu-quick-links" className="footer-menu-list">
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                        <Link rel="noopener noreferrer" to="/Skills">Skills</Link>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                        <Link rel="noopener noreferrer" to="/Projects">Projects</Link>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                        <Link to="/Resume">Resume</Link>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                        <Link to="/Education">Education</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-content-column">
                            <div className="footer-call-to-action blue-sq-filter">
                                {/* <h2 className="footer-call-to-action-title"> Let's Chat</h2>
                                <p className="footer-call-to-action-description"> Have a support question?</p> */}
                                <Link className="footer-call-to-action-button button" to="/Contact" target="_self"> Get in Touch </Link>
                            </div>
                            <div className="footer-call-to-action blue-sq-filter">
                                <h2 className="footer-call-to-action-title"> You Call Us</h2>
                                <p className="footer-call-to-action-link-wrapper"> <Link className="footer-call-to-action-link" to="tel:**********" target="_self"> XXXXXXXXXX </Link></p>
                            </div>
                        </div>
                        <div className="footer-social-links blue-sq-filter"> <svg className="footer-social-amoeba-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
                            <path className="footer-social-amoeba-path" d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"></path>
                        </svg>
                            <Link className="footer-social-link linkedin " to="https://www.linkedin.com/home">
                                {/* <span className="hidden-link-text">Linkedin</span> */}
                                <img src="./images/linked in.png" alt="" className='social-link-img'/>
                            </Link>
                            <Link className="footer-social-link twitter " to="https://x.com/?lang=en">
                                {/* <span className="hidden-link-text">Twitter</span> */}
                                <img src="./images/twitter.png" alt="" className='social-link-img social-link-img-twitter'/>
                            </Link>
                            <Link className="footer-social-link youtube " to="https://www.instagram.com/atish_basak?igsh=MWNlaHU1b2FyYXk5dQ==">
                                {/* <span className="hidden-link-text">Youtube</span> */}
                                <img src="./images/insta.png" alt="" className='social-link-img'/>
                            </Link>
                            <Link className="footer-social-link github " to="https://github.com/atishbasak">
                                {/* <span className="hidden-link-text">Github</span> */}
                                <img src="./images/github logo.png" alt="" className='social-link-img social-link-img-github'/>
                            </Link>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="footer-copyright-wrapper">
                            <p className="footer-copyright-text blue-sq-filter">
                                <Link className="footer-copyright-link" to="#" target="_self"> ©2024. | Designed By: Atish Basak. | All rights reserved. </Link>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>

        </>
    )
}
