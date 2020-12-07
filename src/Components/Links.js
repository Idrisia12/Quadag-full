import React from 'react';
import { Link } from 'react-router-dom'

const Links = () => {
    return (
        <div>
            <div className='nav-list'>
                <ul>
                    <li><a href="#hero" data-after="Home">Home</a></li>
                    <li><a href="#services" data-after="Service">Services</a></li>
                    <li><a href="#projects" data-after="Projects">Aims</a></li>
                    <li><a href="#about" data-after="About">About</a></li>
                    <li><a href="#agent" data-after="Agent">Agent</a></li>
                    <li><a href="#contact" data-after="Contact">Contact</a></li>
                    <li><Link to='/login' className='but'>Login</Link></li>
                    <li><Link to='/register' className='but'>Register</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Links
