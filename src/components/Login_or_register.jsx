import React, {useState} from 'react';
import './login_or_register.css';
import img5 from './images1/img5.jpeg'

import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';
import Register from './register';

const Login_or_register=()=>{
    
    return (
        <div className='main_container'>
            <div className='content'>
                <h2>ENJOY THE BEST EXPERIENCE</h2>
                <p>Log in to enjoy a personalised experience and access all our services</p>
                <div className='buttons'>
                    <Link to='/login' className='login_button'><button className='login2' style={{background:'black'}}>LOG IN</button></Link>
                    <Link to='/register' className='login_button'><button className='register'>REGISTER</button></Link>
                </div>
            </div>
            <div className='image'>
                <img  className='image2' src={img5}alt="sideimage"/>
            </div>
        </div>
    );
};
export default Login_or_register;