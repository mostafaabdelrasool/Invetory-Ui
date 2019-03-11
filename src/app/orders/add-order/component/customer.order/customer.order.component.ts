import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EntityState } from '@ngrx/entity';
import { Store, select } from '@ngrx/store';
import { Customer } from 'src/app/model';
import { getCustomerState } from 'src/app/customer/store/selectors/customer.selectors';
import { Observable } from 'rxjs';
import { GenericAction, GenericActionTypes } from 'src/app/generic.store/actions/generic.actions';
import { ReducerNames } from 'src/app/core/reducer.enum';
import { EditpopupService } from 'src/app/shared/table/editPopup/edit.Popup.service';
import { CustomerSetting } from 'src/app/customer/customer.setting';
import { PopupFields } from 'src/app/shared/table/model/popup.fields';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer.order.component.html',
  styleUrls: ['./customer.order.component.scss']
})
export class CustomerOrderComponent implements OnInit {
  customer$: Observable<Customer[]>;
  @Output() model = new EventEmitter<string>();
  selectedCustomer: string;
  popupFieldSetting: PopupFields[]
  constructor(public store: Store<EntityState<Customer>>,
    private editpopupServiceService: EditpopupService) {
    this.customer$ = store.pipe(select(getCustomerState));
    this.popupFieldSetting = CustomerSetting.TableSetting.popupFields;
  }

  ngOnInit() {
    this.load();
  }
  load(): any {
    let p = new GenericAction(GenericActionTypes.Load, ReducerNames.Customer, null, 'api/customer');
    this.store.dispatch(p);
  }
  customerChanged() {
    this.model.emit(this.selectedCustomer)
  }
  addCustomer() {
    this.editpopupServiceService.openDialog(this.popupFieldSetting).subscribe(x => {
      if (x) {

      }
    })
  }
}
