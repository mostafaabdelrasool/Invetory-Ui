import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'st-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = [];
  constructor(private productservice:ProductService) {
    this.products.push({ ximg: 'favicon.ico', y: 2, z: 3 });
  }
  
  ngOnInit() {
  }

}
