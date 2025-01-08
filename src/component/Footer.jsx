import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import './css/footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className="footer-top">
                    <h2 className='msize'>Walter Patterson</h2>
                    <p>Web Developer & Mobile Application Developer</p>
                    <p className='social-links'>
                        <FaTwitter />
                        <FaFacebook />
                        <CiInstagram />
                        <FaLinkedin />
                        <FaBehance />
                    </p>
                </div>
                <div className="footer-bottom">

                    <p>© Super Folio. All rights reserved.</p>

                    <p>Design <b>- TemplateFlip</b></p>
                </div>
            </div>
        </div>
    )
}

export default Footer