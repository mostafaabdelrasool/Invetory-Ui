import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Products } from '../../model/index';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromProductSelector from '../store/selectors/product.selector';
import { ProductSetting } from '../product.setting';
import * as productActions from '../store/actions/product.action';
import { TableSetting } from 'src/app/shared/table/model';
import { EntityState } from '@ngrx/entity';
import { BaseComponent } from 'src/app/core/base/base.component';

@Component({
  selector: 'st-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent extends BaseComponent<Products> implements OnInit  {
  private _tableSetting: TableSetting;
  Product$: Observable<Array<Products>>;
  serviceApi: string;
  constructor(public productservice: ProductService,public store: Store<EntityState<Products>>) {
    super(productservice.serviceApi,store);
    this.Product$ = store.pipe(select(fromProductSelector.getProductsState))
    this._tableSetting = ProductSetting.TableSetting;
    this.serviceApi = this.productservice.serviceApi;
    
  }

  ngOnInit() {
    this.load();
  }
}
