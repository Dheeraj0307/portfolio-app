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
                        columnsCountBreakPoints={{ 500: 1, 900: 4, 1024: 4 }}
                    >
                        <Masonry >
                            <PortCard img={'/images/portfolio/1.png'} heading={'web design'} para={'dribble.com'} />
                            <PortCard img={'/images/portfolio/2.png'} heading={'web development'} para={'gitHub.com'} />
                            <PortCard img={'/images/portfolio/3.png'} heading={'audio mixing'} para={'soundcloud.com'} />
                            <PortCard img={'/images/portfolio/4.png'} heading={'video editing'} para={'adibe after effects'} />
                            <PortCard img={'/images/portfolio/5.png'} heading={'photography'} para={'adobe photoshop'} />
                            <PortCard img={'/images/portfolio/6.png'} heading={'app development'} para={'android'} />
                            <PortCard img={'/images/portfolio/7.png'} heading={'app design'} para={'flutter'} />
                            <PortCard img={'/images/portfolio/8.png'} heading={'app development'} para={'flutter'} />
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>
        </div>
    )
}

export default Portfolio