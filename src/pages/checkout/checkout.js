import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.scss';

const CheckOut = ({cartItems, total}) => (
    <main className='checkout'>
        <div className='checkout__table'>
            <div className='checkout__table-header'>
                <div className='checkout__table-header__block'>
                    <span>Product</span>
                </div>
                <div className='checkout__table-header__block'>
                    <span>Description</span>
                </div>
                <div className='checkout__table-header__block'>
                    <span>Quantity</span>
                </div>
                <div className='checkout__table-header__block'>
                    <span>Price</span>
                </div>
                <div className='checkout__table-header__block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
            }
            <div className='checkout__total'>
                TOTAL: ${total}
            </div>
        </div>
    </main>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOut);