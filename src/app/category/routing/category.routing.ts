import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from '../component/category.component';

const routes: Routes = [
  { path: 'category', component: CategoryComponent }
];

export const CategoryRoutes = RouterModule.forChild(routes);
