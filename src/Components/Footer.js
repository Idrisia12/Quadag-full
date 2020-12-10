import React from 'react'

const Footer = () => {
    return (
        <div>
            <section id="footer">
                <div className="footer container">
                <div className="brand"><h1>QuadAg</h1></div>
                <h2>Your Complete Agriculture Solution</h2>
                <div className="social-icon">
                    <div className="social-item">
                    <a href="https://twitter.com/"><img src="https://img.icons8.com/color/96/000000/facebook-new.png" style={{ height: "100%", width: "100%", objectFit: "cover"}} alt=""/></a>
                    </div>
                    <div className="social-item">
                    <a href="https://twitter.com/"><img src="https://img.icons8.com/color/96/000000/linkedin.png" style={{ height: "100%", width: "100%", objectFit: "cover"}} alt=""/></a>
                    </div>
                    <div className="social-item">
                    <a href="https://twitter.com/"><img src="https://img.icons8.com/color/96/000000/twitter.png" style={{ height: "100%", width: "100%", objectFit: "cover"}} alt=""/></a>
                    </div>
                </div>
                <p>Copyright © 2020 QuadAg. All rights reserved</p>
                </div>
            </section>
        </div>
    )
}

export default Footer
