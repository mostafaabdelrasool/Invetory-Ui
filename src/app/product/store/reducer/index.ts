import * as fromPoduct from './product.reducer';
import { ProductReducer } from './product.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import { Products } from 'src/app/model';
export interface productState {
    genProducts: EntityState<Products>
}

export const reducers: ActionReducerMap<productState> = {
    genProducts: new ProductReducer().GenericReducer
};

