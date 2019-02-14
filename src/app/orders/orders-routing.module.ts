import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddOrderComponent } from './add-order/add-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { OrdersListComponent } from './orders-list/orders-list.component';


const routes: Routes = [
  { path:'add-order' , component:AddOrderComponent},
  {path: 'edit-order', component:EditOrderComponent},
  {path:'orders' , component: OrdersListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
