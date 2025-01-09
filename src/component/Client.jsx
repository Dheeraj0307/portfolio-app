import React from 'react'
import ClientCard from './ClientCard'

const Client = () => {
    return (
        <div className="pf-client-container">
            <div>
                <h1 className='hpara'>Client Testimonials</h1>
            </div>

            <div className='client-cards'>
                <ClientCard name='Aiyana' para='CEO / Web Design Company' img='/images/client/3.jpg' />
                <ClientCard name='Alexander' para='CEO / Web Design Company' img='/images/client/2.jpg' />
                <ClientCard name='Ariya' para='Web Developer' img='/images/client/4.png' />
                <ClientCard name='Braiden' para='Web Designer' img='/images/client/1.jpg' />
            </div>
        </div>
    )
}

export default Client