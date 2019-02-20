import { Action } from '@ngrx/store';
import { Products } from 'src/app/model/index';

export enum GenericActionTypes {
  Load = 'Load',
  LoadSuccess = 'Load  success',
  LoadProductFail = 'Load Products fail',
  SaveProduct = 'Save Products',
  SaveProductSuccess = 'Save Products success',
  SaveProductFail = "Save Product Fail",
  UpdateProduct = "UpdateProduct",
  UpdateProductSuccess = "UpdateProductSuccess"
}

export class Load<T> implements Action {
  readonly type = GenericActionTypes.Load;
  public payload: T[];
  constructor() { }
}
export class LoadSucess<T> implements Action {
  readonly type = GenericActionTypes.LoadSuccess;

  constructor(public payload: T[]) { }
}
export class LoadFail<T> implements Action {
  readonly type = GenericActionTypes.LoadProductFail;

  constructor(public payload: Products[]) { }
}
export class SaveProduct implements Action {
  readonly type = GenericActionTypes.SaveProduct;

  constructor(public payload: Products) { }
}
export class SaveProductSuccess implements Action {
  readonly type = GenericActionTypes.SaveProductSuccess;

  constructor(public payload: Products) { }
}
export class UpdateProduct implements Action {
  readonly type = GenericActionTypes.UpdateProduct;

  constructor(public payload: Products) { }
}
export class UpdateProductSuccess implements Action {
  readonly type = GenericActionTypes.UpdateProductSuccess;

  constructor(public payload: Products) { }
}
export class SaveProductFail implements Action {
  readonly type = GenericActionTypes.SaveProductFail;

  constructor(public payload: Products) { }
}
export type GenericActionUnion<T> = Load<T> | LoadSucess<T>;