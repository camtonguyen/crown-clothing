import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button';
import { addItem } from '../../redux/cart/cart.action';

import './collection-item.scss';

const CollectionItem = ({item, addItem}) => {
    const { name, imageUrl, price } = item;
    return (
        <div className='collection-item'>
            <div className='collection-item__img'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-item__info'>
                <span className='collection-item__info-name'>{name}</span>  
                <span className='collection-item__info-price'>{price}</span>  
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>add to cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(
    null, 
    mapDispatchToProps
)(CollectionItem);