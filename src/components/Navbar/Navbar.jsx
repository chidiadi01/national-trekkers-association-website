import styles from './Navbar.module.css';
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

    const stateClass = isActive === 'active' ? styles.active : styles.inactive;

    return (
            <div className={`${styles.parent} ${stateClass}`}>
                <div className={`${styles.nav} ${stateClass}`}>
                    <div className={`${styles['nav-logo']} ${styles.desktop}`}><img src={logoimage} alt="logo" /> National Trekkers Association</div>
                    <div className={`${styles['nav-logo']} ${styles.mobile}`}><img src={logoimage} alt="logo" /> N T A</div>
                    <ul className={styles['nav-menu']}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to="/activities">Activities</Link></li>
                        <li><Link to='/legacies'>LEGacies</Link></li>
                        <li><Link to='/membership'>Membership</Link></li>
                        <li className={styles['nav-login']}><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
                <div className={`${styles.ham} ${stateClass}`} onClick={toggleActive}>
                    <div className={`${styles.bar} ${stateClass}`}></div>
                    <div className={`${styles.bar} ${stateClass}`}></div>
                    <div className={`${styles.bar} ${stateClass}`}></div>
                </div>
                <div className={`${styles['mobile-menu']} ${styles.mobile} ${stateClass}`}>
                    <div className={styles['menu-items']}>
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
