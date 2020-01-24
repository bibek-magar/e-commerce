import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  shop => shop.shopData
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopItems],
    collections => collections[collectionUrlParam]
  );
