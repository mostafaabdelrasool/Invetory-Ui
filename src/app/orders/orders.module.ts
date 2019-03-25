import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOrderComponent } from './add-order/component/add-order.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { AngularMaterialModule } from '../angularMaterial/angularMaterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderRoutes } from './routing/order.routing';
import { SharedModule } from '../shared/shared.module';
import * as componet from './add-order/component/index';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutes, SharedModule,
    AngularMaterialModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [AddOrderComponent, OrdersListComponent,
    EditOrderComponent, componet.CustomerOrderComponent,componet.ProductOrderComponent]
})
export class OrdersModule { }
