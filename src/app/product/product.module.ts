import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutes } from './routing/product.routing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducer/index';
import { ProductComponent } from './component/product.component';
import { ProductEffects } from './store/effect/index';


@NgModule({
  imports: [
    CommonModule, SharedModule, ProductRoutes,
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature([ProductEffects]),
  ],
  declarations: [ProductComponent],
})
export class ProductModule { }
