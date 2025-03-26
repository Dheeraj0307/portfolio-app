import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import PortCard from '../component/PortCard'
import './css/portfolio.css'

const Portfolio = () => {

    const img = `${process.env.PUBLIC_URL}/images/portfolio`
    return (
        <div className='portfolio-container' id='portfolio'>
            <div className='pf-container'>
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
                            <PortCard image={img + '/1.png'} heading={'web design'} para={'dribble.com'} />
                            <PortCard image={img + '/2.png'} heading={'web development'} para={'gitHub.com'} />
                            <PortCard image={img + '/3.png'} heading={'audio mixing'} para={'soundcloud.com'} />
                            <PortCard image={img + '/4.png'} heading={'video editing'} para={'adibe after effects'} />
                            <PortCard image={img + '/5.png'} heading={'photography'} para={'adobe photoshop'} />
                            <PortCard image={img + '/6.png'} heading={'app development'} para={'android'} />
                            <PortCard image={img + '/7.png'} heading={'app design'} para={'flutter'} />
                            <PortCard image={img + '/8.png'} heading={'app development'} para={'flutter'} />
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>
        </div>
    )
}

export default Portfolio