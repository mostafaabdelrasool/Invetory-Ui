import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutes } from './routing/product.routing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducer/index';
import { ProductComponent } from './component/product.component';
import { ProductService } from './service/product.service';
import { ProductEffects } from './store/effect/index';

@NgModule({
  imports: [
    CommonModule,SharedModule,ProductRoutes, EffectsModule.forFeature([ProductEffects]), 
    StoreModule.forFeature('products', reducers),
  ],
  declarations: [ProductComponent],
  providers:[ProductService]
})
export class ProductModule { }
