import React, { useState } from 'react'
import './css/navbar.css'
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
    const [toggleState, setToggleState] = useState(true);

    return (
        <div className='header-container'>
            <div className='container'>
                <header className='pf-header'>
                    <div className='pf-logo'>
                        Super Folio
                    </div>
                    <nav className='hide'>
                        <ul className='pf-header-ul'>
                            <li>about</li>
                            <li>services</li>
                            <li>skills</li>
                            <li>portfolio</li>
                            <li>experience</li>
                            <li>contact</li>
                        </ul>
                    </nav>
                    <div className="toggle-btn" onClick={() => setToggleState(!toggleState)}>
                        <FaBars className='toggle_icon' />
                    </div>
                    <div className={`drop-down-list ${!toggleState ? 'open' : ''}`}>
                        <ul>
                            <li>about</li>
                            <li>services</li>
                            <li>skills</li>
                            <li>portfolio</li>
                            <li>experience</li>
                            <li>contact</li>
                        </ul>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Navbar