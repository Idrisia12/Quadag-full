import React from 'react'

const Contact = () => {
    return (
        <div>
            {/* Contact section */}
            <section id="contact">
                <div className="contact container">
                <div><h1 className="section-title" style={{marginTop: "20px"}}>Contact <span>info</span></h1></div>
                <div className="contact-items">
                    <div className="contact-item">
                    <div className="icon"><img src="https://img.icons8.com/color/48/000000/phone.png" alt=""/></div>
                    <div className="contact-info">
                        <h1>Phone</h1>
                        <p>Our phone lines will be on from <br />
                        8:30am to 4pm, Mondays to Fridays <br />
                        12:00pm to 5pm, Weekend <br />
                        </p>
                        <h2>+234 0000 0000</h2>
                        <h2>+234 0000 0000</h2>
                    </div>
                    </div>
                    <div className="contact-item">
                    <div className="icon"><img src="https://img.icons8.com/color/96/000000/gmail.png" alt=""/></div>
                    <div className="contact-info">
                        <h1>Email</h1>
                        <p>All official correspondence and enquiries should be forwared to</p>
                        <h2><b><a href="mailto:QuadAgri@gmail.com">QuadAgri@gmail.com</a></b></h2>

                    </div>
                    </div>
                    <div className="contact-item">
                    <div className="icon"><img src="https://img.icons8.com/color/48/000000/order-delivered.png" alt=""/></div>
                    <div className="contact-info">
                        <h1>Office Address</h1>
                        <h2>State, Nigeria</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15762.179405064702!2d7.4922416!3d9.01395965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1603025600878!5m2!1sen!2sng" style={{
                            width : "100",
                            height: "100",
                            border : "0",
                        }} frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" title="map"></iframe>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* End contact section */}
        </div>
    )
}

export default Contact
