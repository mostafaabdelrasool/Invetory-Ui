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
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Array<Products>;
  private _tableSetting: TableSetting;
  Product$: Observable<fromProduct.ProductState>;
  serviceApi: string;
  constructor(private productservice: ProductService, private store: Store<fromProduct.State>) {
    this.products = new Array<Products>();
    // this.Product$ = store.pipe(select(fromProductSelector.getProductsState));
    this._tableSetting = ProductSetting.TableSetting;
    this.serviceApi = this.productservice.serviceApi;
    this.productservice.getProducts().subscribe((x: Products[]) => {
      x.forEach(p => {
        p.category = {
          categoryID: '122123123', categoryName: 'sassa',
          description:'sssss'
        }
        this.products.push(p);
      })
    })
  }

  ngOnInit() {
  }
  saveProduct = (product: Products) => {
    let p = new SaveProduct(product);
    this.store.dispatch(p);
  }
  updateProduct = (product: Products) => {
    let p = new SaveProduct(product);
    this.store.dispatch(p);
  }
}
