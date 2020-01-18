import React from 'react';

import CustomButton from '../../components/custom-button/custom-button'; 

import './card-dropdown.scss'

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-dropdown__items'></div>
        <CustomButton>go checkout</CustomButton>
    </div>
);

export default CartDropdown;