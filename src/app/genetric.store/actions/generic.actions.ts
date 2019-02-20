import { Action } from '@ngrx/store';
import { Products } from 'src/app/model/index';

export enum GenericActionTypes {
  LoadSuccess = 'Load  success',
  LoadFail = 'Load fail',
  SaveSuccess = 'Save success',
  SaveFail = "Save Fail",
  UpdateSuccess = "Update\Success"
}

export class LoadSucess<T> implements Action {
  readonly type = GenericActionTypes.LoadSuccess;

  constructor(public payload: T[]) { }
}
export class LoadFail<T> implements Action {
  readonly type = GenericActionTypes.LoadFail;

  constructor(public payload: T[]) { }
}

export class SaveSuccess<T> implements Action {
  readonly type = GenericActionTypes.SaveSuccess;

  constructor(public payload: T) { }
}
export class UpdateSuccess<T> implements Action {
  readonly type = GenericActionTypes.UpdateSuccess;

  constructor(public payload: T) { }
}
export class SaveFail<T> implements Action {
  readonly type = GenericActionTypes.SaveFail;

  constructor(public payload: Products) { }
}
export type GenericActionUnion<T> = LoadFail<T> | LoadSucess<T> |
SaveSuccess<T> | UpdateSuccess<T> | SaveFail<T>;