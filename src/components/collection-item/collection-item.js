import React from 'react';

import './collection-item.scss';

const CollectionItem = ({id, name, imageUrl, price}) => (
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
    </div>
)

export default CollectionItem;