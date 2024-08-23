import React from 'react';
import './404.css';
import Navbar from '../Navbar/Navbar';

const fourofour = () => {

    const HFiveStyle = {
        fontWeight: 600,
        color: '#FFC107',
        fontSize: '100px',
        textAlign: 'center'
    }
    return (
        <div>
            <Navbar/>
           <div className='fourofour'>
           <h5 style={HFiveStyle} >404!</h5>
           <p style={{textAlign:'center'}}>Page not found. Redirecting to <a href="./index.html">home page</a>...</p>
           </div>
        </div>
    );
}

export default fourofour;
