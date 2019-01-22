import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angularMaterial/angularMaterial.module';
import { EditPopupComponent } from './EditPopup.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,AngularMaterialModule
  ],
  declarations: [EditPopupComponent],
  entryComponents:[EditPopupComponent]
})
export class EditPopupModule { }
