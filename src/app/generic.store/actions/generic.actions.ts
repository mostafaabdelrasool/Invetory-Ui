import { Action } from '@ngrx/store';

export enum GenericActionTypes {
  Load = 'Load',
  LoadSuccess = 'Load success',
  LoadFail = 'Load fail',
  SaveSuccess = 'Save success',
  SaveFail = "Save Fail",
  UpdateSuccess = "Update Success",
  Update = "Update",
  Save = "Save",
  DeleteSuccess = "DeleteSuccess",
  Delete = "Delete"
}
export class GenericAction implements Action {
   
  constructor(public type,public reducerName,public payload?,public url?: string) { }
}

