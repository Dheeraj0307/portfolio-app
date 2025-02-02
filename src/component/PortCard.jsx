import React from 'react'
import './css/portCard.css'
const PortCard = ({ image, heading, para }) => {
    return (
        <div className='pf-each-img'>
            <img src={image} className='image' alt="imgs" />
            <p className='hover-para'>
                <h3 className='heading'>{heading}</h3>
                <p className='para'>{para}</p>
            </p>
        </div>
    )
}

export default PortCard 