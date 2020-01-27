import { createSelector } from 'reselect';

const SelectShop = state => state.shop;

export const SelectCollectionItems = createSelector(
    [SelectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [SelectCollectionItems],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const SelectCollection = collectionUrlParam => createSelector(
    [SelectCollectionItems],
    collections => collections ? collections[collectionUrlParam] : null
);