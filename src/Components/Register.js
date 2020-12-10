import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div>
            <img className="wave" src="/assets/farm2.png" alt="name"/>
            <div className="container1">
                <div className="img">
                    <img className="wave" src="/assets/farm2.png" alt="name"/>
                </div>
                <div className="login-content">
                    <form action="index.html">
                        <img src="/assets/avatar1.svg" alt=""/>
                        <h2 className="title">Welcome To <Link to="/#hero"><span>QuadAg</span></Link></h2>
                        <div className="input-div">
                        <div className="div">
                                <input type="text" className="input" placeholder="Name"/>
                        </div>
                        </div>
                        <div className="input-div">
                        <div className="div">
                                <input type="email" className="input" placeholder="Email"/>
                        </div>
                        </div>
                        <div className="input-div">
                            <div className="div">
                                <input type="phone" className="input" placeholder="Phone Number"/>
                        </div>
                    </div>
                    <div className="input-div">
                        <div className="div">
                            <input type="password" className="input" placeholder="Password"/>
                    </div>
                    </div>
                        <input type="submit" className="btn" value="Register"></input>
                        <h4>Already a User? <Link to="/login" className="new">Login</Link></h4>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
