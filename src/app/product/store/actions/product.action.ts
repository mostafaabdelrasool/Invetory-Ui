import { Action } from '@ngrx/store';
import { Products } from 'src/app/model/index';

export enum ProductActionTypes {
  LoadProduct = 'Load Products',
}

export class LoadProduct implements Action {
  readonly type = ProductActionTypes.LoadProduct;

  constructor(public payload: Products) {}
}

export type ProductActionUnion = LoadProduct;