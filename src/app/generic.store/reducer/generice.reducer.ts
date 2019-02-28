import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { GenericActionTypes, GenericAction } from '../actions/generic.actions';
//import or declare state
export class GenericReducer<T> {
    adapter: EntityAdapter<T>
    intialState: EntityState<T> 
     constructor(public reducerName:string){
        this.adapter = createEntityAdapter<T>();
        this.intialState = this.adapter.getInitialState();
     }
    
    GenericReducer=(state= this.intialState, action: GenericAction):
        EntityState<T>=> {
            if (action.reducerName!==this.reducerName) {
                return state;
            }
        switch (action.type) {
            case GenericActionTypes.LoadSuccess: {
                return this.adapter.addMany(action.payload, state);
            }
            case GenericActionTypes.SaveSuccess: {
                return this.adapter.addOne(action.payload, state);
            }
            case GenericActionTypes.UpdateSuccess: {
                return this.adapter.updateOne(action.payload, state);
            }
            case GenericActionTypes.DeleteSuccess: {
                return this.adapter.removeOne(action.payload, state);
            }
            default:
                return state;
        }
    }
}
