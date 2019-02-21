import { Action } from '@ngrx/store';
import { Products } from 'src/app/model/index';

export enum GenericActionTypes {
    Load = 'Load',
    LoadSuccess = 'Load  success',
    LoadFail = 'Load fail',
    SaveSuccess = 'Save success',
    SaveFail = "Save Fail",
    UpdateSuccess = "Update\Success",
    Save = "Save"
}
export class GenericAction implements Action {
   
  constructor(public type,public payload?,public url?: string) { }
}
