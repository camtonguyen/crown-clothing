import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button';
import { addItem } from '../../redux/cart/cart.actions';

import { 
    CollectionItemContainer, 
    CollectionItemImg, 
    CollectionItemInfo 
} from './collection-item.styles';

const CollectionItem = ({item, addItem}) => {
    const { name, imageUrl, price } = item;
    return (
        <CollectionItemContainer>
            <CollectionItemImg imageUrl={imageUrl} className='collection-img'/>
            <CollectionItemInfo>
                <span>{name}</span>  
                <span>${price}</span>  
            </CollectionItemInfo>
            <CustomButton inverted onClick={() => addItem(item)}>add to cart</CustomButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(
    null, 
    mapDispatchToProps
)(CollectionItem);