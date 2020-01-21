import { createSelector } from 'reselect';

const SelectShop = state => state.shop;

export const SelectCollectionItems = createSelector(
    [SelectShop],
    shop => shop.collections
);