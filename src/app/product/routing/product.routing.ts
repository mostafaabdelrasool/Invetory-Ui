import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from '../compOnent/product.component';

const routes: Routes = [
     { path: 'product', component: ProductComponent },
];

export const ProductRoutes = RouterModule.forChild(routes);
