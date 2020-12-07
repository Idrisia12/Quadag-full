import React from 'react';
import { Link } from "react-router-dom"
// import './Forget.css'

const Forget = () => {
    return (
        <div>
            <img className="wave" src="farm2.png" alt=""/>
            <div className="container">
                <div className="img">
                    <img src="" alt=''/>
                </div>
                <div className="login-content">
                    <form action="index.html">
                        <img src="avatar1.svg" alt=''/>
                        <h2 className="title">Welcome</h2>
                        <h3>Enter your email to Reset</h3>
                        <div className="input-div">
                        <div className="div">
                                <input type="email" className="input" placeholder="Email@gmail.com"/>
                        </div>
                        </div>

                        <input type="submit" className="btn" value="Reset Password"/>
                        <h4><Link to="/login" ><a href="" className="new">Login</a></Link></h4>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Forget
