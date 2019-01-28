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

//   @Effect()
//   loadPizzas$ = this.actions$.ofType(productActions.SaveProduct).pipe(
//     switchMap(() => {
//       return this.productService
//         .post(this.productService.serviceApi,{})
//         .pipe(
//           map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
//           catchError(error => 
//             of(new pizzaActions.LoadPizzasFail(error))
//             )
//         );
//     })
//   );
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