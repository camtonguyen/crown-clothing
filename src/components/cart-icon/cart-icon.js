import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { 
    CartIconContainer, 
    CartShoppingBag, 
    CartItemsCount 
} from './cart-icon.styles';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <CartShoppingBag/>
        <CartItemsCount>{itemCount}</CartItemsCount>
    </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CartIcon);