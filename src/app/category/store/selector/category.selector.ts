import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EntityState } from "@ngrx/entity";
import { Categories } from "src/app/model/category.model";

 export const getCategoryState = createFeatureSelector<EntityState<Categories>>('category');

 export const getCategoryEntity = createSelector(getCategoryState,x=> Object.values(x.entities));