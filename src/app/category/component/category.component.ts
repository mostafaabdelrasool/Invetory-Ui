import { Component, OnInit } from '@angular/core';
import { TableSetting } from 'src/app/shared/table/model';
import { Categories } from 'src/app/model/category.model';
import { CategorySetting } from '../category.setting';
import { CategoryService } from '../service/category.service';
import { Store } from '@ngrx/store';
import * as fromCategory from '../store/reducer/index';
import { SaveCategory } from '../store/actions/category.action';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  products: Array<Categories>;
  private _tableSetting: TableSetting;
  serviceApi: string;
  constructor(private categoryService: CategoryService
    , private store: Store<fromCategory.State>) {
    this.products = new Array<Categories>();
    // this.Product$ = store.pipe(select(fromProductSelector.getProductsState));
    this._tableSetting = CategorySetting.TableSetting;
    this.serviceApi=this.categoryService.serviceApi;
  }

  ngOnInit() {
  }
  saveProduct = (category: Categories) => {
    let p = new SaveCategory(category);
    this.store.dispatch(p);
  }
  updateProduct=(product: Categories) => {
    // let p = new SaveProduct(product);
    // this.store.dispatch(p);
  }

}
