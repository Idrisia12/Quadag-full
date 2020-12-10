import React, { useState } from 'react';
import Links from './Links';

const Nav = () => {
    const[Nav, setNav] = useState(false)

let menu;
    if(Nav){
        menu = <div className='mobile'><Links/></div>


    }
    // const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
    // const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
    // const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
    // const header = document.querySelector('.header.container');

    // hamburger.addEventListener('click', () => {
    //     hamburger.classList.toggle('active');
    //     mobile_menu.classList.toggle('active');
    // });


    // document.addEventListener('scroll', () => {
    //     var scroll_position = window.scrollY;
    //     if (scroll_position > 250) {
    //         header.style.backgroundColor = '#29323c';
    //     } else {
    //         header.style.backgroundColor = 'transparent';
    //     }
    // });

    // menu_item.forEach((item) => {
    //     item.addEventListener('click', () => {
    //         hamburger.classList.toggle('active');
    //         mobile_menu.classList.toggle('active');
    //     });
    // });
    return (
        <div>
            <section id="header">
                    <div className="header container">
                    <div className="nav-bar">
                        <div className="brand">
                        <a href="#hero"><h1>QuadAg</h1></a>
                        </div>
                        <div className="nav-list">
                        <div className="hamburger" onClick={() => setNav(!Nav)}><div className="bar"></div></div>
                        <div className='web'><Links/></div>
                        </div>
                    </div>
                    </div>
                </section>
                {menu}
        </div>
    )
}

export default Nav;
