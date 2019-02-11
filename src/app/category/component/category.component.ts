import { Component, OnInit } from '@angular/core';
import { TableSetting } from 'src/app/shared/table/model';
import { Categories } from 'src/app/model/category.model';
import { CategorySetting } from '../category.setting';
import { CategoryService } from '../service/category.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  products: Array<Categories>;
  private _tableSetting: Array<TableSetting>;
  serviceApi: string;
  constructor(private productservice: CategoryService) {
    this.products = new Array<Categories>();
    this._tableSetting = [];
    // this.Product$ = store.pipe(select(fromProductSelector.getProductsState));
    this._tableSetting = CategorySetting.TableSetting;
    this.serviceApi=this.productservice.serviceApi;
  }

  ngOnInit() {
  }
  saveProduct = (product: Categories) => {
    // let p = new SaveProduct(product);
    // this.store.dispatch(p);
  }
  updateProduct=(product: Categories) => {
    // let p = new SaveProduct(product);
    // this.store.dispatch(p);
  }

}
