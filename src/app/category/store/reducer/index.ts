import {
    ActionReducerMap,
} from '@ngrx/store';
import * as fromCategory from './category.reducer';
import * as fromRoot  from 'src/app/store/reducer';
export interface CategoryState {
    category: fromCategory.State;
}

  export interface State extends fromRoot.State {
    categories: CategoryState;
  }

export const reducers: ActionReducerMap<CategoryState, any> = {
    category: fromCategory.categoryReducer,
};
