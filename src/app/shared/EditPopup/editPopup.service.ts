import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditPopupComponent } from './EditPopup.component';
import { TableSetting } from './popup.fields';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditpopupServiceService {
  constructor(public dialog: MatDialog) {
  }
  openDialog( fields: Array<TableSetting>): Observable<any> {
    if (!fields || fields.length === 0) {
      return;
    }
    const dialogRef = this.dialog.open(EditPopupComponent, {
      width: '50vw',
      data: fields
    });
    return dialogRef.afterClosed();
  }

}
