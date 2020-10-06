import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from './../../volunteer-network-main/logos/Group 1329.png';
import './Navbar.css';

const Navbar = () => {
    const [loggedUser, setLoggedUser] = useContext(UserContext)
    return (
       <div className='navbar'>
                    <div className='logo'>
                        <img className='logo' src={logo} alt=""/>
                    </div>

                    <div className='nav-links'>
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/#">Donations</Link></li>
                            <li><Link to="/event">Event</Link></li>
                            <li><Link to="/#">Blog</Link></li>
                            <button className='button'>User: {loggedUser.name}</button>
                        </ul>
                        
                    </div>
          
       </div>
    );
};

export default Navbar;