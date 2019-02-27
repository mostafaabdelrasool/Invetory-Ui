import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from '../component/customer.component';

const routes: Routes = [
  { path: 'customer', component: CustomerComponent },
];


export const CustomerRoutes = RouterModule.forChild(routes);
