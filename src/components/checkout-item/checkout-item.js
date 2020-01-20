import React from 'react';
import { connect } from 'react-redux';

import { clearCartItem, addItem, removeItem } from '../../redux/cart/cart.action';

import './checkout-item.scss';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const { imageUrl, name, quantity, price } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='checkout-item__image'>
                <img src={imageUrl} alt={name} />
            </div>
            <div className='checkout-item__name'>{name}</div>
            <div className='checkout-item__quantity'>
                <span className='checkout-item__quantity-arrow' onClick={() => removeItem(cartItem)}>&#10094;</span>
                <span className='checkout-item__quantity-value'>{quantity}</span>
                <span className='checkout-item__quantity-arrow' onClick={() => addItem(cartItem)}>&#10095;</span>
            </div>
            <div className='checkout-item__price'>${price}</div>
            <div className='checkout-item__remove' onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearCartItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);