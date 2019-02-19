import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EntityState } from "@ngrx/entity";
import { Products } from "src/app/model";

 export const getState = createFeatureSelector<EntityState<Products>>('products');

 export const getProductsState = createSelector(getState,x=> Object.values(x.entities));