import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.action'

import CustomButton from '../../components/custom-button/custom-button'; 
import CartItem from '../../components/cart-item/cart-item';

import './card-dropdown.scss'

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-dropdown__items'>
            {
                cartItems.length 
                ? (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>))
                : (<span className='cart-dropdown__empty-message'>Your cart is empty</span>)
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>go checkout</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));