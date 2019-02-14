import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { AddOrderComponent } from './add-order/add-order.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { AngularMaterialModule } from '../angularMaterial/angularMaterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    AngularMaterialModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [AddOrderComponent, OrdersListComponent, EditOrderComponent]
})
export class OrdersModule { }
