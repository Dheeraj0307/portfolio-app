import React from 'react'
import './css/navbar.css'

const Navbar = () => {
    return (
        <div className='bg-light-gray'>
            <div className='container'>
                <header className='pf-header'>
                    <div className='pf-logo'>
                        Super Folio
                    </div>
                    <nav>
                        <ul className='pf-header-ul'>
                            <li>about</li>
                            <li>services</li>
                            <li>skills</li>
                            <li>portfolio</li>
                            <li>experience</li>
                            <li>contact</li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    )
}

export default Navbar