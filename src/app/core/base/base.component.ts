import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import { GenericActionTypes, GenericAction } from 'src/app/generic.store/actions/generic.actions';


export class BaseComponent<T> {

  constructor(public url, public store: Store<EntityState<T>>) {
  }
  saveProduct = (item: T) => {
    let p = new GenericAction(GenericActionTypes.Save, item, this.url);
    this.store.dispatch(p);
  }
  updateProduct = (item: T) => {
  }
  loadProduct = () => {
    let p = new GenericAction(GenericActionTypes.Load, null, this.url);
    this.store.dispatch(p);
  }
  deleteProduct = (item: T) => {
  }
}
