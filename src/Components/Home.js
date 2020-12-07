import React from 'react';
import Nav from './Nav';
import Service from './Services';
import Project from './Project';
import About from './About';
import Agent from './Agent';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
           
            {/* Header */}
                <Nav/>
            {/* End Header */}

            {/* Hero Section */}
                <section id="hero">
                    <div className="hero container">
                        <div>
                            <h1>QuadAg, <span></span></h1>
                            <h1>Digital Agriculture platform</h1>
                            <a href="#projects" type="button" className="cta">Learn More</a>
                        </div>
                    </div>
                </section>
            {/* end hero section */}

            {/* Service section */}
                <Service/>
            {/* End service section */}

            {/* Project section */}
                <Project/>
            {/* End project section */}

            {/* About section */}
                <About/>
            {/* End About section */}

                <Agent/>

            {/* Contact Section */}
                <Contact/>

            {/* Footer */}
                <Footer/>
            {/* End footer section */}
        {/* <script src="./app.js"></script> */}
 </div>
    )
}

export default Home
