import {
    ActionReducerMap,
} from '@ngrx/store';
import * as fromPoduct from './product.reducer';
import * as fromRoot  from 'src/app/store/reducer';
export interface ProductState {
    products: fromPoduct.State;
}

  export interface State extends fromRoot.State {
    products: ProductState;
  }

export const reducers: ActionReducerMap<ProductState, any> = {
    products: fromPoduct.ProductReducer,
};
