import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PopupSetting, FieldType, TableSetting } from '../model';
@Component({
  selector: 'app-editPopup',
  templateUrl: './edit.popup.component.html',
  styleUrls: ['./edit.popup.component.css']
})
export class EditPopupComponent implements OnInit {
  data = {};
  dropDownsData = {};
  constructor(public dialogRef: MatDialogRef<EditPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public setting: PopupSetting) { }

  ngOnInit() {
    this.data = this.setting.data;
    this.setting.fields.forEach(x => {
      if (x.type === FieldType.select) {
        this.getSelectData(x);
      }
    });
  }
  getSelectData(x: TableSetting): any {
    if (x.selectUrl) {

    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onOkClick(): void {
    this.dialogRef.close(this.data)
  }


}
