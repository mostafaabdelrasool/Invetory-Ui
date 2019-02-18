import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Categories } from 'src/app/model/category.model';
import { CategoryActionUnion, CategoryActionTypes } from '../actions/category.action';
//import or declare state

export interface State extends EntityState<Categories> {
    selectedCategoryId: string | null;
}
export const adapter: EntityAdapter<Categories> = createEntityAdapter<Categories>({
    selectId: (category: Categories) => category.categoryID,
    sortComparer: false,
});
export const intialState: State = adapter.getInitialState({
    selectedCategoryId: null,
});
export function categoryReducer(state = intialState, action: CategoryActionUnion) {
    switch (action.type) {
        case CategoryActionTypes.LoadCategories: {
            return adapter.addMany(action.payload, state);
        }
        case CategoryActionTypes.SaveCategorySuccess: {
            return adapter.addOne(action.payload, state);
        }
        default:
            return state;
    }
}