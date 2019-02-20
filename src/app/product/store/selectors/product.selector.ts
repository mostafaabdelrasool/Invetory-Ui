import { createFeatureSelector, createSelector } from "@ngrx/store";
import { productState } from "../reducer";

export const getState = createFeatureSelector<productState>('products');

export const getProductsState = createSelector(getState,x=>
 Object.values(x.genProducts.entities));