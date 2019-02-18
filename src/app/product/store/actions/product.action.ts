import { Action } from '@ngrx/store';
import { Products } from 'src/app/model/index';

export enum ProductActionTypes {
  LoadProduct = 'Load Products',
  LoadProductSuccess = 'Load Products success',
  LoadProductFail = 'Load Products fail',
  SaveProduct = 'Save Products',
  SaveProductSuccess = 'Save Products success',
  SaveProductFail = "Save Product Fail",
  UpdateProduct = "UpdateProduct",
  UpdateProductSuccess = "UpdateProductSuccess"
}

export class LoadProduct implements Action {
  readonly type = ProductActionTypes.LoadProduct;
  public payload: Products[];
  constructor() { }
}
export class LoadProductSucess implements Action {
  readonly type = ProductActionTypes.LoadProductSuccess;

  constructor(public payload: Products[]) { }
}
export class LoadProductFail implements Action {
  readonly type = ProductActionTypes.LoadProductFail;

  constructor(public payload: Products[]) { }
}
export class SaveProduct implements Action {
  readonly type = ProductActionTypes.SaveProduct;

  constructor(public payload: Products) { }
}
export class SaveProductSuccess implements Action {
  readonly type = ProductActionTypes.SaveProductSuccess;

  constructor(public payload: Products) { }
}
export class UpdateProduct implements Action {
  readonly type = ProductActionTypes.UpdateProduct;

  constructor(public payload: Products) { }
}
export class UpdateProductSuccess implements Action {
  readonly type = ProductActionTypes.UpdateProductSuccess;

  constructor(public payload: Products) { }
}
export class SaveProductFail implements Action {
  readonly type = ProductActionTypes.SaveProductFail;

  constructor(public payload: Products) { }
}
export type ProductActionUnion = LoadProduct | SaveProduct |
  SaveProductSuccess | SaveProductFail |LoadProductFail|LoadProductSucess;