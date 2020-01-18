import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../card-dropdown/card-dropdown';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';

const Header = ({currentUser, hidden}) => (
    <header className='header'>
        <nav className='navbar'>
            <Link to='/' className='logo-box'>
                <Logo className='lobo-box__logo' />
            </Link>
            <ul className='navbar__nav'>
                <li className='navbar__nav-item'>
                    <Link to='/shop' className='navbar__nav-link'>shop</Link>
                </li>
                {
                    currentUser ? 
                    <li className='navbar__nav-item' onClick={() => auth.signOut()}>sign out</li> 
                    : 
                    <li className='navbar__nav-item'>
                        <Link to='/signin' className='navbar__nav-link'>sign in</Link>
                    </li>
                }
                <li className='navbar__nav-item'>
                    <Link to='/contact' className='navbar__nav-link'>contact</Link>
                </li>
                <li className='navbar__nav-item'>
                    <CartIcon />
                </li>
            </ul>
            {
                !hidden && <CartDropdown/>
            }
        </nav>
    </header>
);

const mapStateToProps = ({ user: {currentUser}, cart: {hidden} }) => ({
    currentUser,
    hidden
}); 

export default connect(mapStateToProps)(Header);