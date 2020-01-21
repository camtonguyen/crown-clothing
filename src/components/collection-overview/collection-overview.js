import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { SelectCollectionItems } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview';

const CollectionOverview = ({collections}) => (
    <div className='collection-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: SelectCollectionItems
})

export default connect(mapStateToProps)(CollectionOverview);