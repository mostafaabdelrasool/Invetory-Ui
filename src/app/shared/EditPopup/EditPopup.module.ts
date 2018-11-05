import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPopupComponent } from './EditPopup.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angularMaterial/angularMaterial.module';

@NgModule({
  imports: [
    CommonModule,FormsModule,AngularMaterialModule
  ],
  declarations: [EditPopupComponent],
  entryComponents:[EditPopupComponent]
})
export class EditPopupModule { }
