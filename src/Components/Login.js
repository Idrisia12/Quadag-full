import React from 'react';
import Forget from './Forget';
import { Link } from 'react-router-dom'
// import './Login.css'

const Login = () => {
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
                                <input type="text" className="input" placeholder="Email"/>
                        </div>
                        </div>

                        <div className="input-div">
                        <div className="div">
                                <input type="password" className="input" placeholder="Password"/>
                        </div>
                        </div>
                        <Link to="/forgot"><a href="" className="forgot">Forgot Password?</a></Link>
                        
                    {/* <input type="submit" className="btn" value="Login" onclick="location.href='https://google.com';"/> */}
                <h4 className="btn"><a href="https://materialdash.netlify.app/app/dashboard" style={{olor:"white", top:"100", textDecoration:"none"}}>Login</a></h4>
                        <h4>New Here? <Link to='/register'><a href="" className="new">Sign Up</a></Link></h4>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
