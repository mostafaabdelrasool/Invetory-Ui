import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CategoryState } from "../reducer";

 export const getCategoryState = createFeatureSelector<CategoryState>('category');

 export const getCategoryEntity = createSelector(getCategoryState,x=>
     Object.values(x.genCategries.entities));