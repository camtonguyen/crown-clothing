import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';

const Header = () => (
    <header className='header'>
        <nav className='navbar'>
            <Link to='/' className='logo-box'>
                <Logo className='lobo-box__logo' />
            </Link>
            <ul className='navbar__nav'>
                <li className='navbar__nav-item'>
                    <Link to='/shop' className='navbar__nav-link'>shop</Link>
                </li>
                <li className='navbar__nav-item'>
                    <Link to='/contact' className='navbar__nav-link'>contact</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;