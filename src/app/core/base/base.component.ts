import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import { GenericActionTypes, GenericAction } from 'src/app/generic.store/actions/generic.actions';


export class BaseComponent<T> {

  constructor(public url, public store: Store<EntityState<T>>,public reducerName:string) {
  }
  save = (item: T) => {
    let p = new GenericAction(GenericActionTypes.Save,this.reducerName, item, this.url);
    this.store.dispatch(p);
  }
  update = (item: T) => {
    let p = new GenericAction(GenericActionTypes.Update,this.reducerName, item, this.url);
    this.store.dispatch(p);
  }

  load = () => {
    let p = new GenericAction(GenericActionTypes.Load,this.reducerName, null, this.url);
    this.store.dispatch(p);
  }
  delete = (item: T) => {
    let p = new GenericAction(GenericActionTypes.Delete,this.reducerName, item, this.url);
    this.store.dispatch(p);
  }
}
