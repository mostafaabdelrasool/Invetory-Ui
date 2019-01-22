import { Action } from '@ngrx/store';
import { Products } from 'src/app/model/index';

export enum ProductActionTypes {
  LoadProduct = 'Load Products',
  SaveProduct = 'Save Products'
}

export class LoadProduct implements Action {
  readonly type = ProductActionTypes.LoadProduct;

  constructor(public payload: Products[]) { }
}
export class SaveProduct implements Action {
  readonly type = ProductActionTypes.SaveProduct;

  constructor(public payload: Products) { }
}

export type ProductActionUnion = LoadProduct | SaveProduct;