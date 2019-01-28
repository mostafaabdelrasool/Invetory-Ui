import {ProductActionTypes, ProductActionUnion } from "../actions/product.action";
import { Products } from "src/app/model";
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
//import or declare state

export interface State extends EntityState<Products> {
    selectedProductId: string | null;
}
export const adapter: EntityAdapter<Products> = createEntityAdapter<Products>({
    selectId: (product: Products) =>{
       debugger
        return product.id
    },
    sortComparer: false,
});
export const intialState: State = adapter.getInitialState({
    selectedProductId: null,
});
export function ProductReducer(state = intialState, action:ProductActionUnion) :State{
    switch (action.type) {
        case ProductActionTypes.LoadProduct: {
            return adapter.addMany(action.payload, state);
        }
        case ProductActionTypes.SaveProductSuccess: {
            return adapter.addOne(action.payload, state);
        }
        default:
            return state;
    }
}