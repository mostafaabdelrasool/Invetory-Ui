import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './component/category.component';
import { CategoryRoutes } from './routing/category.routing';
import { SharedModule } from '../shared/shared.module';
import { CategoryService } from './service/category.service';

@NgModule({
  imports: [
    CommonModule,CategoryRoutes,SharedModule
  ],
  declarations: [CategoryComponent],
  providers:[CategoryService]
})
export class CategoryModule { }
