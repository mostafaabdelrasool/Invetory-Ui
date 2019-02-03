import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditPopupComponent } from './edit.popup.component';
import { TableSetting } from '../model/popup.fields';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditpopupService {
  constructor(public dialog: MatDialog) {
  }
  openDialog(fields: Array<TableSetting>, data?: any): Observable<any> {
    if (!fields || fields.length === 0) {
      return;
    }
    const dialogRef = this.dialog.open(EditPopupComponent, {
      width: '50vw',
      data: { fields: fields, data: {...data} || {} }
    });
    return dialogRef.afterClosed();
  }

}
