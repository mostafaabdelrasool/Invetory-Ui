import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.api/data.service';
import { HttpClientModule } from '@angular/common/http';
import { BaseComponent } from './base/base.component';
@NgModule({
  imports: [
    CommonModule,HttpClientModule,
  ],
  // declarations: [BaseComponent],
  providers:[DataService],
  //  exports:[BaseComponent]
})
export class CoreModule { }
