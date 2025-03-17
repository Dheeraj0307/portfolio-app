import React from 'react'
import './css/about.css'

const About = () => {
    return (
        <div className='about-container' id='about'>
            <div className='pf-about'>
                <div className="about-left">
                    <h2 className='msize'>Hello! I’m Walter Patterson.</h2>
                    <p >I am passionate about UI/UX design and Web Design. I am a skilled front-end developer and master of graphic design tools such as Photoshop and Sketch. I am a quick learner and a team worker that gets the job done. I can easily capitalize on low hanging fruits and quickly maximize timely deliverables for real-time schemas.</p>
                    <div className='user-info'>
                        <div className='user-detail'>
                            <h3>Age:</h3>
                            <p>28</p>
                        </div>
                        <div className='user-detail'>
                            <h3>Email: </h3>
                            <p>walter@comapny.com</p>
                        </div>
                        <div className='user-detail'>
                            <h3>Skype: </h3>
                            <p>username@skype.com</p>
                        </div>
                        <div className='user-detail'>
                            <h3>Phone: </h3>
                            <p>+0718-111-0111</p>
                        </div>
                        <div className='user-detail'>
                            <h3>Address: </h3>
                            <p>New Delhi,India</p>
                        </div>
                        <div className='user-detail'>
                            <h3>Status: </h3>
                            <p>Available</p>
                        </div>
                    </div>
                </div>
                <div className="about-right" data-aos='fade-left' >
                    <img src={`${process.env.PUBLIC_URL}/images/avatar.jpg`} alt="user-img" />
                </div>
            </div>

        </div>
    )
}

export default About