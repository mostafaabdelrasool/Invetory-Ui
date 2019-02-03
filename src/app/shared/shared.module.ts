import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EditInPlaceComponent } from './editInPlace/editInPlace.component';
import { ImageUploaderComponent } from './image.uploader/image.uploader.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angularMaterial/angularMaterial.module';
import { ListComponent } from './table/list/list.component';
import { EditPopupComponent } from './table/editPopup/edit.popup.component';

@NgModule({
  imports: [
    CommonModule, BrowserAnimationsModule,FormsModule
    ,AngularMaterialModule
  ],
  declarations: [ListComponent, EditInPlaceComponent,
     ImageUploaderComponent,EditPopupComponent],
  exports: [ListComponent,ImageUploaderComponent],
  entryComponents:[EditPopupComponent]
})
export class SharedModule { }
