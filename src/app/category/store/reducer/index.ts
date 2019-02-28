import * as fromCategory from './category.reducer';
import { EntityState } from '@ngrx/entity';
import { categories } from 'src/app/model';
import { ActionReducerMap } from '@ngrx/store';

export interface CategoryState {
    genCategries: EntityState<categories>
}

export const reducers: ActionReducerMap<CategoryState> = {
    genCategries: new fromCategory.CategoryReducer("category").GenericReducer
};

