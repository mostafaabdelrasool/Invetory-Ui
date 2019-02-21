import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as productActions from '../actions/product.action';
import * as fromServices from '../../service/product.service';

@Injectable()
export class ProductEffects{
  constructor(
    actions$: Actions,
    private productService: fromServices.ProductService
  ) {
  }
  // @Effect()
  // createProduct$ = this.actions$.ofType(productActions.ProductActionTypes.SaveProduct).pipe(
  //   map((action: productActions.ProductAction) => {
  //     return { type: action.type, payload: action.payload }
  //   }),
  //   switchMap(product => {
  //     return this.productService
  //       .post(this.productService.serviceApi, product)
  //       .pipe(
  //         map((x: Products) => new genericAction.SaveSuccess(x)),
  //         catchError(error => of(new productActions.ProductAction(error)))
  //       );
  //   })
  // )
  // @Effect()
  // updateProduct$ = this.actions$.ofType(productActions.ProductActionTypes.UpdateProduct).pipe(
  //   map((action: productActions.ProductAction) => {
  //     return { type: action.type, payload: action.payload }
  //   }),
  //   switchMap(product => {
  //     return this.productService
  //       .put(this.productService.serviceApi, product)
  //       .pipe(
  //         map((x: Products) => new genericAction.UpdateSuccess(x)),
  //         catchError(error => of(new productActions.ProductAction(error)))
  //       );
  //   })
  // )
}