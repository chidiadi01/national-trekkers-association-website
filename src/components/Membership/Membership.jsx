import React from 'react';
import './Membership.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Membership = () => {
    return (
        <div className='body'>
            <Navbar/>
            <div className='membership-content'>
                <h1>Membership</h1>
             </div>
            <Footer/>
        </div>
    );
}

export default Membership;
