import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import * as categoryActions from '../actions/category.action';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Categories } from 'src/app/model/category.model';
import { CategoryService } from '../../service/category.service';

@Injectable()
export class CategroyEffects {
    constructor(
        private actions$: Actions,
        private categoryService: CategoryService
    ) {}
    @Effect() CreateCategory$: Observable<Action> = 
    this.actions$.ofType(categoryActions.CategoryActionTypes.SaveCategory)
    .pipe(
        map((action: categoryActions.SaveCategory) => action.payload),
        switchMap(product => {
          return this.categoryService
          .post(this.categoryService.serviceApi,product)
            .pipe(
              map(productResult => new categoryActions.SaveCategorySuccess(<Categories>productResult)),
              catchError(error => of(new categoryActions.SaveCategoryFail(error)))
            );
        })
      );

      @Effect()
      loadCategories$ = this.actions$.ofType(categoryActions.CategoryActionTypes.LoadCategories).pipe(
        switchMap(() => {
          return this.categoryService
            .get(this.categoryService.serviceApi)
            .pipe(
              map((categories:Array<Categories>) => new categoryActions.LoadCategorisSuccess(categories)),
              catchError(error => 
                of(new categoryActions.LoadCategorisFail(error))
                )
            );
        })
      );
}