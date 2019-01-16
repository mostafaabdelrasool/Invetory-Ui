import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductRoutes } from './routing/product.routing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducer/index';
import { ProductComponent } from './component/product.component';

@NgModule({
  imports: [
    CommonModule,SharedModule,ProductRoutes, EffectsModule.forFeature([]), 
    StoreModule.forFeature('products', reducers),
  ],
  declarations: [ProductComponent],
  exports:[ProductComponent, RouterModule]
})
export class ProductModule { }
