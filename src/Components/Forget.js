import React from 'react';
import { Link } from "react-router-dom";
import './Forget.css';

const Forget = () => {
    return (
        <div>
            <img className="wave" src="/assets/farm2.png" alt="name"/>
            <div className="container1">
                <div className="img">
                    <img className="wave" src="/assets/farm2.png" alt="name"/>
                </div>
                <div className="login-content">
                    <form action="index.html">
                        <img src="/assets/avatar1.svg" alt="name"/>
                        <h2 className="title">Welcome to <Link to="/#hero"><span>QuadAg</span></Link></h2>
                        <h3>Enter your email to Reset</h3>
                        <div className="input-div">
                        <div className="div">
                                <input type="email" className="input" placeholder="Email@gmail.com"/>
                        </div>
                        </div>

                        <input type="submit" className="btn" value="Reset Password"/>
                        <h4><Link to="/login" className="new">Login</Link></h4>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Forget;
