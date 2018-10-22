import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { NgxLayoutsModule } from 'ngx-layouts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { EditInPlaceComponent } from './editInPlace/editInPlace.component';
import { FormsModule } from '@angular/forms';
import { ImageUploaderComponent } from './image.uploader/image.uploader.component';

@NgModule({
  imports: [
    CommonModule, NgxLayoutsModule, BrowserAnimationsModule, MatToolbarModule, MatSidenavModule, MatButtonModule,
    MatListModule, MatIconModule, MatDividerModule, MatInputModule,FormsModule
  ],
  declarations: [ListComponent,EditInPlaceComponent,ImageUploaderComponent],
  exports: [ListComponent, NgxLayoutsModule, MatToolbarModule, MatSidenavModule,
    MatButtonModule, MatListModule, MatIconModule, MatDividerModule, MatInputModule]
})
export class SharedModule { }
