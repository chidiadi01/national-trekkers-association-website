import React from 'react';
import './legacies.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Legacies = () => {
    return (
        <div>
             <Navbar/>
             <div className='leg'>
                <h1>Legacies</h1>
             </div>
            <Footer/>
        </div>
    );
}

export default Legacies;
