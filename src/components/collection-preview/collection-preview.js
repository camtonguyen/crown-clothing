import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item';

import { 
    CollectionContainer, 
    CollectionTitle, 
    CollectionPreviewContainer 
} from './collection-preview.styles';

const CollectionPreview = ({title, items, history, match, routeName }) => (
    <CollectionContainer>
        <CollectionTitle onClick={() => history.push(`${match.path}/${routeName}`)}>
            {title.toUpperCase()}
        </CollectionTitle>
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

export default withRouter(CollectionPreview);