import { LoadProduct, ProductActionTypes } from "../actions/product.action";
import { Products } from "src/app/model";
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
//import or declare state

export interface State extends EntityState<Products> {
    selectedProductId: string | null;
}
export const adapter: EntityAdapter<Products> = createEntityAdapter<Products>({
    selectId: (product: Products) => product.Id,
    sortComparer: false,
});
export const intialState: State = adapter.getInitialState({
    selectedProductId: null,
});
export function ProductReducer(state = intialState, action: LoadProduct) :State{
    switch (action.type) {
        case ProductActionTypes.LoadProduct: {
            //add your code
            return adapter.addMany(action.payload, state);
        }

        default:
            return state;
    }
}