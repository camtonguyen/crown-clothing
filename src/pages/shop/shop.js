import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview';
import CollectionPage from '../collection/collection';

const ShopPage = ({match}) => (
    <main className='main shop'>
        <Route exact path={`${match.path}`}  component={CollectionOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </main>
);

export default ShopPage;