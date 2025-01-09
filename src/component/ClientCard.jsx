import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import './css/client.css'

const ClientCard = ({ name, para, img }) => {
    return (
        <div className='client-card'>
            <div className="top">
                <span> <FaQuoteLeft size='32px' /></span>
                <p>Walter displays exemplary professionalism and is able to take on challenges. He learns quickly and is an asset to any team.</p>
            </div>
            <div className="bottom">
                <div className="para">
                    <h3>{name}</h3>
                    <p className='usize'>{para}</p>
                </div>
                <img src={img} alt={name} width={100} height={100} />
            </div>
        </div>
    )
}

export default ClientCard