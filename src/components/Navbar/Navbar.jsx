import './Navbar.css';
import logoimage from '../../../public/icon-circle.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isActive,setIsActive] = useState('inactive');
    const toggleActive =()=>{
        if(isActive==='inactive') {
            setIsActive('active');
        } else if(isActive==='active') {
            setIsActive('inactive');
        }
    }
        return (
            <div  className={`parent ${isActive}`} >
                <div className={`nav ${isActive}`}>
                    <div className='nav-logo desktop'> <img src={logoimage}/> National Trekkers Association</div>
                    <div className='nav-logo mobile'> <img src={logoimage}/> N T A</div>
                    <ul className='nav-menu'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to="/activities">Activities</Link></li>
                        <li><Link to='/legacies'>LEGacies</Link></li>
                        <li><Link to='/membership'>Membership</Link></li>
                        <li className='nav-login'><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
                <div className={`ham ${isActive}`} onClick={toggleActive}>
                                <div className={`bar ${isActive}`}></div>
                                <div className={`bar ${isActive}`}></div>
                                <div className={`bar ${isActive}`}></div>
                </div>
                <div className={`mobile-menu mobile ${isActive}`}>
                            <div className='menu-items'>
                                <ul>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to="/activities">Activities</Link></li>
                                    <li><Link to='/legacies'>LEGacies</Link></li>
                                    <li><Link to='/membership'>Membership</Link></li>
                                    <li><Link to='login'>Login</Link></li>
                                </ul>
                            </div>
                </div>
            </div>
        );
    }

export default Navbar;
