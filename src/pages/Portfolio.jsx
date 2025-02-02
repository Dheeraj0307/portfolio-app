import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import PortCard from '../component/PortCard'
import './css/portfolio.css'

const Portfolio = () => {
    return (
        <div className='pf-container'>
            <div className='portfolio-container' id='portfolio'>
                <div>
                    <h1 className='hpara'>Portfolio</h1>
                </div>

                <div className="pf-folio">

                    <ResponsiveMasonry
                        columnsCountBreakPoints={{
                            320: 1,
                            768: 4,
                            1024: 4,
                            1440: 4
                        }}
                    >
                        <Masonry >
                            <PortCard image={'/images/portfolio/1.png'} heading={'web design'} para={'dribble.com'} />
                            <PortCard image={'/images/portfolio/2.png'} heading={'web development'} para={'gitHub.com'} />
                            <PortCard image={'/images/portfolio/3.png'} heading={'audio mixing'} para={'soundcloud.com'} />
                            <PortCard image={'/images/portfolio/4.png'} heading={'video editing'} para={'adibe after effects'} />
                            <PortCard image={'/images/portfolio/5.png'} heading={'photography'} para={'adobe photoshop'} />
                            <PortCard image={'/images/portfolio/6.png'} heading={'app development'} para={'android'} />
                            <PortCard image={'/images/portfolio/7.png'} heading={'app design'} para={'flutter'} />
                            <PortCard image={'/images/portfolio/8.png'} heading={'app development'} para={'flutter'} />
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>
        </div>
    )
}

export default Portfolio