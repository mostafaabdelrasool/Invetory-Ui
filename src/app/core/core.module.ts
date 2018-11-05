import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { DataService } from './data.api/data.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,HttpClientModule,
  ],
  declarations: [CoreComponent],
  providers:[DataService],
})
export class CoreModule { }
