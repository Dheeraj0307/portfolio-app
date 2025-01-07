import React from 'react'
import './css/barline.css'

const Barline = ({ value }) => {
    return (
        < >
            <div className="bar">
                <div className="qnty" style={{ width: value }}></div>
            </div>
        </ >
    )
}

export default Barline