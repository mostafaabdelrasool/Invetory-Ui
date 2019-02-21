import { Component, OnInit } from '@angular/core';
import { GenericAction, GenericActionTypes } from 'src/app/genetric.store/actions/generic.actions';
import { Store } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';

export class BaseComponent<T> implements OnInit {

  constructor(public url, public store: Store<EntityState<T>>) {
    debugger
   }

  ngOnInit() {
  }
  saveProduct = (item: T) => {
    let p = new  GenericAction(GenericActionTypes.Save,item,this.url);
    this.store.dispatch(p);
  }
  updateProduct = (item: T) => {
  }
  loadProduct = () => {
    let p = new GenericAction(GenericActionTypes.Load,null,this.url);
    this.store.dispatch(p);
  }
  deleteProduct = (item: T) => {
  }
}
