import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Categories } from 'src/app/model/category.model';
import { GenericReducer } from 'src/app/generic.store/reducer/generice.reducer';
//import or declare state
export class CategoryReducer extends GenericReducer<Categories>{
}
