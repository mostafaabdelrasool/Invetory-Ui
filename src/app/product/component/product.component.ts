import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Products } from '../../model/index';
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../store/reducer/index';
import { Observable } from 'rxjs';
import * as fromProductSelector from '../store/selectors/product.selector';
import { ProductSetting } from '../product.setting';
import { SaveProduct } from '../store/actions/product.action';
import { TableSetting } from 'src/app/shared/table/model';

@Component({
  selector: 'st-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Array<Products>;
  private _tableSetting: Array<TableSetting>;
  Product$: Observable<fromProduct.ProductState>;
  serviceApi: string;
  constructor(private productservice: ProductService, private store: Store<fromProduct.State>) {
    this.products = new Array<Products>();
    this._tableSetting = [];
    // this.Product$ = store.pipe(select(fromProductSelector.getProductsState));
    this._tableSetting = ProductSetting.TableSetting;
    this.serviceApi=this.productservice.serviceApi;
  }

  ngOnInit() {
  }
  saveProduct = (product: Products) => {
    let p = new SaveProduct(product);
    this.store.dispatch(p);
  }
  updateProduct=(product: Products) => {
    let p = new SaveProduct(product);
    this.store.dispatch(p);
  }
}
