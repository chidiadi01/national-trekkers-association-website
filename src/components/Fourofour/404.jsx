import React from 'react';
import './404.css';
import Navbar from '../Navbar/Navbar';

const fourofour = () => {
    return (
        <div>
            <Navbar/>
           <div className='fourofour'>
           <h5>404!</h5>
           <p>Page not found. Redirecting to <a href="./index.html">home page</a>...</p>
           </div>
        </div>
    );
}

export default fourofour;
