import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Categories } from 'src/app/model/category.model';
import { CategoryActionUnion, CategoryActionTypes } from '../actions/category.action';
//import or declare state

export const adapter: EntityAdapter<Categories> = createEntityAdapter<Categories>();
export const intialState:  EntityState<Categories> = adapter.getInitialState();
export function categoryReducer(state = intialState, action: CategoryActionUnion):
EntityState<Categories> {
    switch (action.type) {
        case CategoryActionTypes.LoadCategorisSuccess: {
            return adapter.addMany(action.payload, state);
        }
        case CategoryActionTypes.SaveCategorySuccess: {
            return adapter.addOne(action.payload, state);
        }
        default:
            return state;
    }
}