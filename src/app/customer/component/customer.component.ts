import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { Customer } from 'src/app/model';
import { Observable } from 'rxjs';
import { CustomerService } from '../service/customer.service';
import { EntityState } from '@ngrx/entity';
import { Store, select } from '@ngrx/store';
import * as fromCustomerSelector from '../store/selectors/customer.selectors';
import { TableSetting } from 'src/app/shared/table/model';
import { CustomerSetting } from '../customer.setting';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent extends BaseComponent<Customer> implements OnInit {

  private _tableSetting: TableSetting;
  customer$: Observable<Array<Customer>>;
  serviceApi: string;
  constructor(public customerservice: CustomerService,public store: Store<EntityState<Customer>>) {
    super(customerservice.serviceApi,store,"customer");
    this.customer$ = store.pipe(select(fromCustomerSelector.getCustomerState))
    this._tableSetting = CustomerSetting.TableSetting;
    this.serviceApi = this.customerservice.serviceApi;
    
  }

  ngOnInit() {
    this.load();
  }

}
