import { Action } from '@ngrx/store';

export enum ProductActionTypes {
  LoadProduct = 'Load Products',
  LoadProductSuccess = 'Load Products success',
  LoadProductFail = 'Load Products fail',
  SaveProduct = 'Save Products',
  SaveProductSuccess = 'Save Products success',
  SaveProductFail = "Save Product Fail",
  UpdateProduct = "UpdateProduct",
  UpdateProductSuccess = "UpdateProductSuccess",
  DeleteProduct = "DeleteProduct"
}
export class ProductAction implements Action {
  constructor(public type,public payload?) { }
}
