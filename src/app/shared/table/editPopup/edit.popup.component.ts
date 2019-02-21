import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PopupSetting, FieldType } from '../model';
import { TableApiService } from '../service/table.api.service';
import { SelectSetting } from '../model/popup.fields';
@Component({
  selector: 'app-editPopup',
  templateUrl: './edit.popup.component.html',
  styleUrls: ['./edit.popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditPopupComponent implements OnInit {
  data = {};
  dropDownsData = {};
  constructor(public dialogRef: MatDialogRef<EditPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public setting: PopupSetting, private tableApiService: TableApiService) { }

  ngOnInit() {
    this.data = this.setting.data;
    this.setting.fields.forEach(x => {
      if (x.type === FieldType.select) {
        this.fetchSelectData(x.selectSetting);
      }
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onOkClick(): void {
    this.dialogRef.close(this.data)
  }
  fetchSelectData(setting: SelectSetting) {
    // if (!this.tableApiService[setting.cashingObjectName]) {
      this.tableApiService.fetchData(setting.apiUrl).subscribe(x => {
        setting.data = <Array<any>>x;
        // if (setting.data.length > 0) {
        //   this.tableApiService[setting.cashingObjectName] = setting.data;
        // }
      })
    // } else {
    //   setting.data = this.tableApiService[setting.cashingObjectName];
    // }

  }
}
