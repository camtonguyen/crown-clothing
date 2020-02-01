import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCardHidden } from '../../redux/cart/cart.selectors';

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../card-dropdown/card-dropdown';

import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { 
    NavBarContainer, 
    LogoContainer, 
    NavContainer, 
    NavItem 
} from './header.styles';

const Header = ({currentUser, hidden, signOutStart}) => (
    <header>
        <NavBarContainer>
            <LogoContainer to='/'>
                <Logo />
            </LogoContainer>
            <NavContainer>
                <NavItem>
                    <Link to='/shop'>shop</Link>
                </NavItem>
                <NavItem>
                    <Link to='/contact'>contact</Link>
                </NavItem>
                {
                    currentUser ? 
                    <NavItem onClick={signOutStart}>sign out</NavItem> 
                    : 
                    <NavItem>
                        <Link to='/signin'>sign in</Link>
                    </NavItem>
                }
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

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);