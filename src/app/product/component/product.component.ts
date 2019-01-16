import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Products } from '../../model/index';
import { PopupFields, FieldType } from '../../shared/EditPopup/popup.fields';
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../store/reducer/index';
import { Observable } from 'rxjs';
import * as fromProductSelector from '../store/selectors/product.selector';
import { ProductSetting } from '../product.setting';

@Component({
  selector: 'st-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Array<Products>;
  header: Array<string>;
  private _popupFileds: Array<PopupFields>;
  Product$: Observable<fromProduct.ProductState>;
  constructor(private productservice: ProductService, private store: Store<fromProduct.State>) {
    this.products = new Array<Products>();
    this.header = ProductSetting.Header;
    this._popupFileds = [];
    this.Product$ = store.pipe(select(fromProductSelector.getProductsState));
    this._popupFileds = ProductSetting.PopupFileds;
  }

  ngOnInit() {
  }
  saveProduct(product) {
    this.productservice.post(product).subscribe(x => {
    })
  }

}
