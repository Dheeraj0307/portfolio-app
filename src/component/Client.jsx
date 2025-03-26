import React from 'react'
import ClientCard from './ClientCard'

const Client = () => {
    const img = `${process.env.PUBLIC_URL}/images/client`
    return (
        <div className='client-container'>
            <div className="pf-client-container">
                <div>
                    <h1 className='hpara'>Client Testimonials</h1>
                </div>

                <div className='client-cards'>
                    <ClientCard data_aos={'fade-right'} delay={100} name='Aiyana' para='CEO / Web Design Company' img={img + '/1.webp'} />
                    <ClientCard data_aos={'fade-left'} delay={300} name='Alexander' para='CEO / Web Design Company' img={img + '/2.webp'} />
                    <ClientCard data_aos={'fade-right'} delay={200} name='Ariya' para='Web Developer' img={img + '/3.webp'} />
                    <ClientCard data_aos={'fade-left'} delay={400} name='Braiden' para='Web Designer' img={img + '/4.webp'} />
                </div>
            </div>
        </div>
    )
}

export default Client