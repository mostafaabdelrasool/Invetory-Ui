import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import { Products } from 'src/app/model';
import { Observable } from 'rxjs';
import { getProductsState } from 'src/app/product/store/selectors/product.selector';
import { GenericActionTypes, GenericAction } from 'src/app/generic.store/actions/generic.actions';
import { ReducerNames } from 'src/app/core/reducer.enum';
import { OrderDetails } from 'src/app/model/order.model';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.scss']
})
export class ProductOrderComponent implements OnInit {
  products$: Observable<Products[]>;
  @Input() orderDetails: OrderDetails[] = new Array<OrderDetails>()
  @Input() orderDetailsChange = new EventEmitter<OrderDetails[]>()
  options: FormGroup;
  constructor(public store: Store<EntityState<Products>>, fb: FormBuilder) {
    this.products$ = store.pipe(select(getProductsState))
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  colors: string[] = ["yellow", "green", 'red'];
  favoriteColor: string = '';

  ngOnInit() {
    this.load();
  }
  load(): any {
    let p = new GenericAction(GenericActionTypes.Load, ReducerNames.Product, null, 'api/product');
    this.store.dispatch(p);
  }
  onProductSelect(product: Products) {
    this.orderDetails.push({
      productId: product.id,
      unitPrice: product.unitPrice,
      quantity: 1,
      discount: 0,
      productName: product.productName
    })
    this.orderDetailsChange.emit(this.orderDetails);
  }
  addProduct(){
  }
}
