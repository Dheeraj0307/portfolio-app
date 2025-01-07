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
                        <img src="/images/hello3.svg" alt="hero" className='hero-img' />
                    </div>
                    <div className="hero-right-side">
                        <div className="right-para">
                            <h3 className='msize'>hello!</h3>
                            <h1>i'm walter patterson</h1>
                            <p className='psize'>Web Developer & Mobile Application Developer</p>
                            <p className='social-links'>
                                <FaTwitter />
                                <FaFacebook />
                                <CiInstagram />
                                <FaLinkedin />
                                <FaBehance />
                            </p>
                            <button> get in touch <FaArrowRight /> </button>
                        </div>
                    </div>
                </main>
            </div>
            <div style={{ transform: ' translateY(10px)' }}>
                <img src='/images/wave-bg.svg' alt="wave" className='bg-wave' />
            </div>
        </div>
    )
}

export default HeroSection