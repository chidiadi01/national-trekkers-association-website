import React from 'react';
import './login.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Login = () => {
    return (
        <div className='body'>
           <Navbar/>
            <div className='login-content'>
                <h1>Login</h1>
            </div>
            <Footer/>  
        </div>
    );
}

export default Login;
