import { ActionReducerMap } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import { Customer } from 'src/app/model/index';
import * as fromCustomer from './customer.reducer';
export interface CustomerState {
    genCustomer: EntityState<Customer>
}

export const reducers: ActionReducerMap<CustomerState> = {
    genCustomer: new fromCustomer.CustomerReducer("customer").GenericReducer
};

