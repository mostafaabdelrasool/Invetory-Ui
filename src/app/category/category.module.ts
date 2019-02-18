import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './component/category.component';
import { CategoryRoutes } from './routing/category.routing';
import { SharedModule } from '../shared/shared.module';
import { CategoryService } from './service/category.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducer';
import { CategroyEffects } from './store/effects/category.effect';

@NgModule({
  imports: [
    CommonModule,CategoryRoutes,SharedModule,EffectsModule.forFeature([CategroyEffects]), 
    StoreModule.forFeature('category', reducers),
  ],
  declarations: [CategoryComponent],
  providers:[CategoryService]
})
export class CategoryModule { }
