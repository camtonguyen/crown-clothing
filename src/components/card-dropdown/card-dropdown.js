import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import CartItem from '../../components/cart-item/cart-item';

import { 
    CardDropdownContainer, 
    CardDropdownItems, 
    CardDropdownEmptyMsg, 
    CartDropdownButton 
} from './card-dropdown.styles';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <CardDropdownContainer>
        <CardDropdownItems>
            {
                cartItems.length 
                ? (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>))
                : (<CardDropdownEmptyMsg>Your cart is empty</CardDropdownEmptyMsg>)
            }
        </CardDropdownItems>
        <CartDropdownButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>go checkout</CartDropdownButton>
    </CardDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));