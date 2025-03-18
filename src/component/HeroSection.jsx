import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

import { FaArrowRight } from "react-icons/fa";
import './css/hero.css'

const HeroSection = () => {
    return (
        <div className='bg-light-gray'>
            <div className='container'>
                <main className='hero-section'>
                    <div className="hero-left-side">
                        <img src={`${process.env.PUBLIC_URL}/images/hello3.svg`} loading='lazy' alt="hero" className='hero-img' />
                    </div>
                    <div className="hero-right-side">
                        <div className="right-para">
                            <h3 className='msize'>hello!</h3>
                            <h1 data-aos="fade-left"
                                data-aos-delay="50">
                                i'm walter patterson</h1>
                            <p data-aos="fade-up" data-aos-delay="100" className='psize'>Web Developer & Mobile Application Developer</p>
                            <p data-aos="fade-up" data-aos-delay="200" className='social-links'>
                                <FaTwitter size={25} />
                                <FaFacebook size={25} />
                                <CiInstagram size={25} />
                                <FaLinkedin size={25} />
                                <FaBehance size={25} />
                            </p>
                            <button data-aos="fade-up" data-aos-delay="200" > get in touch <FaArrowRight /> </button>
                        </div>
                    </div>
                </main>
            </div>
            <div className='wave-ctn' >
                <img src={`${process.env.PUBLIC_URL}/images/wave-bg.svg`} loading='lazy' alt="wave" className="bg-wave" />
            </div>
        </div>
    )
}

export default HeroSection