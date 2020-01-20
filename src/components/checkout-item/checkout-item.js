import React from 'react';

import './checkout-item.scss';

const CheckoutItem = ({cartItem: {imageUrl, name, quantity, price}}) => (
    <div className='checkout-item'>
        <div className='checkout-item__image'>
            <img src={imageUrl} alt={name} />
        </div>
        <span className='checkout-item__name'>{name}</span>
        <span className='checkout-item__quantity'>{quantity}</span>
        <span className='checkout-item__price'>${price}</span>
        <span className='checkout-item__remove'>&#10005;</span>
    </div>
);

export default CheckoutItem;