import React from 'react';

import './cart-item.scss';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt={name}/>
        <div className='cart-item__details'>
            <span className='cart-item__details__name'>{name}</span>
            <span>{quantity} x ${price}</span>
        </div>
    </div>
);

export default CartItem;