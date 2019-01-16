import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EditInPlaceComponent } from './editInPlace/editInPlace.component';
import { ImageUploaderComponent } from './image.uploader/image.uploader.component';
import { FormsModule } from '@angular/forms';
import { EditPopupModule } from './EditPopup/editPopup.module';
import { AngularMaterialModule } from '../angularMaterial/angularMaterial.module';

@NgModule({
  imports: [
    CommonModule, BrowserAnimationsModule,FormsModule,EditPopupModule,AngularMaterialModule
  ],
  declarations: [ListComponent, EditInPlaceComponent, ImageUploaderComponent],
  exports: [ListComponent]
})
export class SharedModule { }
