import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCardHidden } from '../../redux/cart/cart.selectors';


import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../card-dropdown/card-dropdown';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { 
    NavBarContainer, 
    LogoContainer, 
    NavContainer, 
    NavItem 
} from './header.styles';

const Header = ({currentUser, hidden}) => (
    <header>
        <NavBarContainer>
            <LogoContainer to='/'>
                <Logo />
            </LogoContainer>
            <NavContainer>
                <NavItem>
                    <Link to='/shop'>shop</Link>
                </NavItem>
                {
                    currentUser ? 
                    <NavItem onClick={() => auth.signOut()}>sign out</NavItem> 
                    : 
                    <NavItem>
                        <Link to='/signin'>sign in</Link>
                    </NavItem>
                }
                <NavItem>
                    <Link to='/contact'>contact</Link>
                </NavItem>
                <NavItem>
                    <CartIcon />
                </NavItem>
            </NavContainer>
            {
                !hidden && <CartDropdown/>
            }
        </NavBarContainer>
    </header>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCardHidden
}); 

export default connect(mapStateToProps)(Header);