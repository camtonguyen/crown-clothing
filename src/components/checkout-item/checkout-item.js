import React from 'react';
import { connect } from 'react-redux';

import { clearCartItem, addItem, removeItem } from '../../redux/cart/cart.actions';

import { 
    CheckoutItemContainer, 
    TextContainer, 
    QuantityContainer, 
    CheckoutItemImage, 
    CheckoutItemRemove 
} from './checkout-item.styles';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const { imageUrl, name, quantity, price } = cartItem;
    return (
        <CheckoutItemContainer>
            <CheckoutItemImage>
                <img src={imageUrl} alt={name} />
            </CheckoutItemImage>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>${price}</TextContainer>
            <CheckoutItemRemove onClick={() => clearItem(cartItem)}>&#10005;</CheckoutItemRemove>
        </CheckoutItemContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearCartItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);