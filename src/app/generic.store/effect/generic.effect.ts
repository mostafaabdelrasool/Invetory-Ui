import { Injectable, Inject, Optional } from '@angular/core';
import { of } from 'rxjs';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as genericActions from '../actions/generic.actions';
import { DataService } from 'src/app/core/data.api/data.service';
@Injectable()
export class GenericEffects {
    @Effect()
    loadType$ = this.actions$.ofType(genericActions.GenericActionTypes.Load).pipe(
        map((action: genericActions.GenericAction) => {
            return { type: action.type, url: action.url,reducerName:action.reducerName }
        }),
        switchMap((item) => {
            return this.dataService
                .get(item.url)
                .pipe(
                    map(t =>
                        new genericActions.GenericAction(genericActions.GenericActionTypes.LoadSuccess,item.reducerName ,t)
                    ),
                    catchError(error =>
                        of(null)
                    )
                );
        })
    );
    @Effect()
    createType$ = this.actions$.ofType(genericActions.GenericActionTypes.Save).pipe(
        map((action: genericActions.GenericAction) => {
            return { type: action.type, payload: action.payload ,url: action.url}
        }),
        switchMap(item => {
            return this.dataService
                .post(item.url, item.payload)
                .pipe(
                    map(x => new genericActions.GenericAction(genericActions.
                        GenericActionTypes.SaveSuccess, x)),
                    catchError(error => of(new genericActions.GenericAction(genericActions.
                        GenericActionTypes.SaveFail, error)))
                );
        })
    )
    @Effect()
    updateType$ = this.actions$.ofType(genericActions.GenericActionTypes.Update).pipe(
        map((action: genericActions.GenericAction) => {
            return { type: action.type, payload: action.payload ,url: action.url}
        }),
        switchMap(item => {
            return this.dataService
                .put(item.url, item.payload)
                .pipe(
                    map(x => new genericActions.GenericAction(genericActions.
                        GenericActionTypes.UpdateSuccess, x)),
                    catchError(error => of(new genericActions.GenericAction(genericActions.
                        GenericActionTypes.SaveFail, error)))
                );
        })
    )
    @Effect()
    deleteType$ = this.actions$.ofType(genericActions.GenericActionTypes.Delete).pipe(
        map((action: genericActions.GenericAction) => {
            return { type: action.type, payload: action.payload ,url: action.url}
        }),
        switchMap(item => {
            return this.dataService
                .delete(item.url, item.payload['id'])
                .pipe(
                    map(x => new genericActions.GenericAction(genericActions.
                        GenericActionTypes.DeleteSuccess,item.payload)),
                    catchError(error => of(new genericActions.GenericAction(genericActions.
                        GenericActionTypes.SaveFail, error)))
                );
        })
    )
    constructor(
        public actions$: Actions,
        private dataService: DataService,
    ) {
    }
}