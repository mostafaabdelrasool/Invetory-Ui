import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomerState } from "../reducer";

export const getState = createFeatureSelector<CustomerState>('customers');

export const getCustomerState = createSelector(getState,x=>
 Object.values(x.genCustomer.entities));