import React from 'react';
import './footer.css';
import logoimage from '/icon-circle.svg'
import { Link } from 'react-router-dom';
import App from '../../App';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Footer = () => {

//Chidiadi here! This footer has given me issues. I have been trying to use broswer location (URL path)
// to change the colour of the anchors on the site map. It worked the first time but after some more coding, it 
// made the site a blank page. I just had to delete all the code except for the CSS so I can succesfully
// deploy and move forward. 30th August, 2024. Hopefully, in the future, it will make sense. It always does.

    return (
        <footer>
            <div className="description">
            <div className='logo-name'> 
            <img src={logoimage}/> National Trekkers Association
            </div>
            <p>
                We are committed and dedicated to helping people create impact
                 and <span style={{color:"#FFC107"}}> leg</span>acies with their feet through walking.
            </p>

            </div>
            <div className="site-map">
                    <ul>
                        <li ><Link to='/' >Home</Link></li>
                        <li ><Link to='/activities' >Activities</Link></li>
                        <li ><Link to='/legacies' >LEGacies</Link></li>
                        <li ><Link to='/membership' >Membership</Link></li>
                        <li ><Link to='/login' >Login</Link></li>
                    </ul>
            </div>
            <div className="contact">
                    <h3>Contact me</h3>
                    <ul>
                        <li><a href="https://linkedin.com/in/chidiadi-anyanwu">LinkedIn</a></li>
                        <li><a href="https://github.com/chidiadi01">GitHub</a></li>
                    </ul>
            </div>
            <div className="copyright">
                <p>Copyright &#169; 2024 Chidiadi Anyanwu</p>
            </div>
            
        </footer>
    );
}

export default Footer;
