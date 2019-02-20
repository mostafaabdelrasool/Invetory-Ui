import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { GenericActionTypes } from '../actions/generic.actions';
import * as genericActions from '../actions/generic.actions';
import { DataService } from 'src/app/core/data.api/data.service';
@Injectable()
export class GenericEffects<T> {
    @Effect()
    loadType$ = this.actions$.ofType(GenericActionTypes.Load).pipe(
      switchMap(() => {
        return this.dataService
          .get(this.url)
          .pipe(
            map((t:Array<T>) => new genericActions.LoadSucess(t)),
            catchError(error => 
              of(null)
              )
          );
      })
    );
    constructor(
        public actions$: Actions,
        private dataService: DataService,
        private url
    ) {}
}