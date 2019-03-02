import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLayoutsModule } from 'ngx-layouts';
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
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule, MatToolbarModule, MatSidenavModule, MatButtonModule, FormsModule,MatSelectModule,
    MatListModule, MatIconModule, MatDividerModule, MatInputModule, MatDialogModule,
     NgxLayoutsModule,MatCheckboxModule,MatExpansionModule
  ],
  exports: [MatToolbarModule, MatSidenavModule,MatSelectModule,
    MatButtonModule, MatListModule, MatIconModule, MatDividerModule, MatInputModule, MatDialogModule,
     NgxLayoutsModule, FormsModule,MatCheckboxModule,MatExpansionModule]
})
export class AngularMaterialModule { }
