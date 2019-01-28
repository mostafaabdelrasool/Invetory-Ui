import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TableSetting, FieldType } from './popup.fields';

@Component({
  selector: 'app-editPopup',
  templateUrl: './editPopup.component.html',
  styleUrls: ['./editPopup.component.css']
})
export class EditPopupComponent implements OnInit {
  data = {};
  dropDownsData = {};
  constructor(public dialogRef: MatDialogRef<EditPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public fields: Array<TableSetting>) { }

  ngOnInit() {
    this.fields.forEach(x => {
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
  onOkClick():void{
    this.dialogRef.close(this.data)
  }


}
