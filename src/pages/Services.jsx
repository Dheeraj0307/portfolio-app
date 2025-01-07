import React from 'react'
import './css/services.css'

const Services = () => {
    return (
        <div className='container'>
            <div className="pf-services">
                <h1 className='hsize'>My Services</h1>
                <p className='cpara'>I offer services fit for any website or app. I can quickly maximize timely deliverables for real-time schemas.</p>
                <div className='ctn-icons'>
                    <div className="icons">
                        <img src="/images/services/web-design.svg" alt="web-design" width={95} />
                        <h5>web design</h5>
                    </div>
                    <div className="icons">
                        <img src="/images/services/graphic-design.svg" alt="graphic-design" width={95} />
                        <h5>graphic design</h5>
                    </div>
                    <div className="icons">
                        <img src="/images/services/ui-ux.svg" alt="ui-ux" width={95} />
                        <h5>UI/UX</h5>
                    </div>
                    <div className="icons">
                        <img src="/images/services/app-development.svg" alt="app-development" width={95} />
                        <h5>app development</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services