import React, { useState } from 'react'
import './css/navbar.css'
import { FaBars } from "react-icons/fa";
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
                            <AnchorLink className='anchor_link' offset='100' href='#about'>
                                <li>about</li>
                            </AnchorLink>
                            <AnchorLink className='anchor_link' offset='100' href='#services'>
                                <li>services</li>
                            </AnchorLink>
                            <AnchorLink className='anchor_link' offset='100' href='#skills'>
                                <li>skills</li>
                            </AnchorLink>
                            <AnchorLink className='anchor_link' offset='100' href='#portfolio'>
                                <li>portfolio</li>
                            </AnchorLink>
                            <AnchorLink className='anchor_link' offset='100' href='#experience'>
                                <li>experience</li>
                            </AnchorLink>
                            <AnchorLink className='anchor_link' offset='100' href='#contact'>
                                <li>contact</li>
                            </AnchorLink>
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