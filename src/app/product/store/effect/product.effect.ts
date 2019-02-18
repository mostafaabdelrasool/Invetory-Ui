import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as productActions from '../actions/product.action';
import * as fromServices from '../../service/product.service';
import { Products } from 'src/app/model';
import { of } from 'rxjs';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: fromServices.ProductService
  ) {}

  @Effect()
  loadPizzas$ = this.actions$.ofType(productActions.ProductActionTypes.LoadProduct).pipe(
    switchMap(() => {
      return this.productService
        .get(this.productService.serviceApi)
        .pipe(
          map((products:Array<Products>) => new productActions.LoadProductSucess(products)),
          catchError(error => 
            of(new productActions.LoadProductFail(error))
            )
        );
    })
  );
  @Effect()
  createProduct$ = this.actions$.ofType(productActions.ProductActionTypes.SaveProduct).pipe(
    map((action: productActions.SaveProduct) => action.payload),
    switchMap(product => {
      return this.productService
      .post(this.productService.serviceApi,product)
        .pipe(
          map(productResult => new productActions.SaveProductSuccess(<Products>productResult)),
          catchError(error => of(new productActions.SaveProductFail(error)))
        );
    })
  )
}