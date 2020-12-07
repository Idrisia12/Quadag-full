import React from 'react';
import Login from './Login';
import { Link } from 'react-router-dom'
// import './Register.css'

const Register = () => {
    return (
        <div>
            <img className="wave" src="/assets/farm2.png" alt=""/>
            <div className="container">
                <div className="img">
                    <img src="" alt=""/>
                </div>
                <div className="login-content">
                    <form action="index.html">
                        <img src="/assets/avatar1.svg" alt=""/>
                        <h2 className="title">Welcome To <span>QuadAg</span></h2>
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
                        {/* <input type="submit" className="btn" value="Register"> */}
                <h4 className="btn"><a href="https://materialdash.netlify.app/app/dashboard" style={{color:"white", textDecoration:"none"}}>Register</a></h4>
                        <h4>Already a User? <Link to="/login"><a href="" className="new">Login</a></Link></h4>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
