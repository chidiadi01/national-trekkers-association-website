import './Navbar.css';
import logoimage from '../../../public/icon-circle.svg'

const Navbar = () => {
        return (
            <div className='nav'>
                <div className='nav-logo desktop'> <img src={logoimage}/> National Trekkers Association</div>
                <div className='nav-logo mobile'> <img src={logoimage}/> NTA</div>
                <ul className='nav-menu'>
                    <li>Home</li>
                    <li>Activities</li>
                    <li>LEGacies</li>
                    <li>Membership</li>
                    <li className='nav-login'>Login</li>
                </ul>
            </div>
        );
    }

export default Navbar;
