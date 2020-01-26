import React from 'react';

import CollectionItem from '../collection-item/collection-item';

import { 
    CollectionContainer, 
    CollectionTitle, 
    CollectionPreviewContainer 
} from './collection-preview.styles';

const CollectionPreview = ({title, items}) => (
    <CollectionContainer>
        <CollectionTitle>{title.toUpperCase()}</CollectionTitle>
        <CollectionPreviewContainer>
            {
                items.filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </CollectionPreviewContainer>
    </CollectionContainer>
);

export default CollectionPreview;