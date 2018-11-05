import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductRoutes } from './product.routing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,SharedModule,ProductRoutes, EffectsModule.forFeature([]), 
    StoreModule.forFeature('products', null),

  ],
  declarations: [ProductComponent],
  exports:[ProductComponent, RouterModule]
})
export class ProductModule { }
