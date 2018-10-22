import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,SharedModule
  ],
  declarations: [ProductComponent],
  exports:[ProductComponent]
})
export class ProductModule { }
