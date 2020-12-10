import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends React.Component {
    render(){
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
                                <input type="email" className="input" placeholder="Email"/>
                        </div>
                        </div>

                        <div className="input-div">
                        <div className="div">
                                <input type="password" className="input" placeholder="Password"/>
                        </div>
                        </div>
                        <Link to="/forgot" className='forgot'>Forgot Password?</Link>

                        <input type="submit" className="btn" value="Login"></input>

                        <h4>New Here? <Link to='/register' className='new'>Sign Up</Link></h4>
                    </form>
                </div>
            </div>
        </div>
      );
  };
};

export default Login;
