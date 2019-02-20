import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent<T> implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  saveProduct = (item: T) => {
  }
  updateProduct = (item: T) => {
  }
  loadProduct = () => {
  }
  deleteProduct = (item: T) => {
  }
}
