import { ProductActionTypes, ProductActionUnion } from "../actions/product.action";
import { Products } from "src/app/model";
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
//import or declare state

export const adapter: EntityAdapter<Products> = createEntityAdapter<Products>();
export const intialState: EntityState<Products> = adapter.getInitialState();
export function ProductReducer(state = intialState, action: ProductActionUnion): EntityState<Products> {
    switch (action.type) {
        case ProductActionTypes.LoadProductSuccess: {
            return adapter.addMany(action.payload, state);
        }
        case ProductActionTypes.SaveProductSuccess: {
            return adapter.addOne(action.payload, state);
        }
        default:
            return state;
    }
}