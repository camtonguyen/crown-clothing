import React from 'react';

import './collection-preview.scss';

import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({title, items}) => (
    <div className='collection'>
        <h1 className='collection__title'>{title.toUpperCase()}</h1>
        <div className='collection__preview'>
            {
                items.filter((item, idx) => idx < 4)
                .map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps}/>
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;