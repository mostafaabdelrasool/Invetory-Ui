import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.api/data.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule, HttpClientModule,
  ],
  providers: [DataService],
})
export class CoreModule { }
