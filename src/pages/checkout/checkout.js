import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import { 
    CheckoutTable, 
    CheckoutHeader, 
    CheckoutBlock, 
    CheckoutTotal, 
    CheckoutTestWarning 
} from './checkout.styles';

const CheckOut = ({cartItems, total}) => (
    <main>
        <CheckoutTable>
            <CheckoutHeader>
                <CheckoutBlock>
                    <span>Product</span>
                </CheckoutBlock>
                <CheckoutBlock>
                    <span>Description</span>
                </CheckoutBlock>
                <CheckoutBlock>
                    <span>Quantity</span>
                </CheckoutBlock>
                <CheckoutBlock>
                    <span>Price</span>
                </CheckoutBlock>
                <CheckoutBlock>
                    <span>Remove</span>
                </CheckoutBlock>
            </CheckoutHeader>
            {
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
            }
            <CheckoutTotal>
                TOTAL: ${total}
            </CheckoutTotal>
            {total ?
                <Fragment>
                    <CheckoutTestWarning>
                        *Please use the following test credit card for payments*
                        <br/>
                        4242 4242 4242 4242 - Exp: 01/20 - CVC: 123
                    </CheckoutTestWarning>
                    <StripeCheckoutButton price={total} />
                </Fragment>
                : null
            }
        </CheckoutTable>
    </main>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOut);