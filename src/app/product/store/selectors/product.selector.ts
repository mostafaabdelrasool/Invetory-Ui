import { createFeatureSelector } from "@ngrx/store";
import { State, ProductState } from "../reducer/index";

export const getProductsState = createFeatureSelector<State, ProductState>('products');