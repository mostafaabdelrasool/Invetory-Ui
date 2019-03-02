import { RouterModule, Routes } from "@angular/router";
import { AddOrderComponent } from "../add-order/add-order.component";
import { EditOrderComponent } from "../edit-order/edit-order.component";
import { OrdersListComponent } from "../orders-list/orders-list.component";

const routes: Routes =  [
    { path:'add-order' , component:AddOrderComponent},
    {path: 'edit-order', component:EditOrderComponent},
    {path:'orders' , component: OrdersListComponent}
  ];;

export const OrderRoutes = RouterModule.forChild(routes);