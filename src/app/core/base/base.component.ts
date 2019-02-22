import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import { GenericActionTypes, GenericAction } from 'src/app/generic.store/actions/generic.actions';


export class BaseComponent<T> {

  constructor(public url, public store: Store<EntityState<T>>) {
  }
  save = (item: T) => {
    let p = new GenericAction(GenericActionTypes.Save, item, this.url);
    this.store.dispatch(p);
  }
  update = (item: T) => {
    let p = new GenericAction(GenericActionTypes.Update, item, this.url);
    this.store.dispatch(p);
  }

  load = () => {
    let p = new GenericAction(GenericActionTypes.Load, null, this.url);
    this.store.dispatch(p);
  }
  delete = (item: T) => {
    let p = new GenericAction(GenericActionTypes.Delete, item, this.url);
    this.store.dispatch(p);
  }
}
