import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './component/customer.component';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { CustomerRoutes } from './routing/customer.routing';
import { CustomerService } from './service/customer.service';
import { reducers } from '../category/store/reducer';

@NgModule({
  imports: [
    CommonModule, SharedModule, CustomerRoutes,
    StoreModule.forFeature('customers', reducers),
  ],
  declarations: [CustomerComponent],
  providers:[CustomerService]
})
export class CustomerModule { }
