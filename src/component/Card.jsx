import React from 'react'
import './css/card.css'

const Card = ({ data_aos, title, para, img, delay }) => {
    return (
        <div className='exp-card' data-aos={data_aos} data-aos-delay={delay}
        >
            <div className="cars-head msize">
                <div className="para  ">
                    <h2>{title}</h2>
                    <p>{para}</p>
                </div>
                <img src={img} alt={title} width={50} />
            </div>
            <div className="cars-body psize">
                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                <p>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
            </div>
        </div>
    )
}

export default Card