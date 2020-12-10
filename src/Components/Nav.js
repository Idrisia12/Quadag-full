import React, { useState } from 'react';
import Links from './Links';

function Nav(){
    const [showMenu, setShowMenu ] = useState(false)

let menu;
    if(showMenu){
        menu = <div className='mobile1'>
          <Links/>
        </div>
    }

    return (
        <div>
            <section id="header">
                    <div className="header container">
                    <div className="nav-bar">
                        <div className="brand">
                        <a href="#hero"><h1>QuadAg</h1></a>
                        </div>
                        <div className="nav-list">
                        <div className="hamburger" onClick={() => setShowMenu(!showMenu)}><div className="bar"></div></div>
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
