import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableSetting } from '../model/popup.fields';
import { EditpopupService } from '../editPopup/edit.Popup.service';
import { PopupSetting } from '../model/popup.setting';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() data: Array<any>;
  @Input() saveData: Function;
  @Input() deleteData: Function;
  @Input() updateData: Function;
  @Input() tableSetting: Array<TableSetting>;
  @Output() onSave: EventEmitter<any>;
  private _keys: Array<any>;
  popupSetting: PopupSetting;
  constructor(private editpopupServiceService: EditpopupService) {
    this._keys = [];
    this.onSave = new EventEmitter<any>();
    this.popupSetting = new PopupSetting();
    this.popupSetting.fields = this.tableSetting;
  }
  ngOnInit() {
    this.validateTableSettings();
  }
  private validateTableSettings() {
    if (this.tableSetting.length === 0) {
      throw 'Popup fileds should not be null';
    }
  }
  addNewLine() {

    this.editpopupServiceService.openDialog(this.tableSetting).subscribe(x => {
      // this.onSave.emit(x);
      if (x) {
        this.data.push(x);
        if (this.saveData) {
          this.saveData.apply(this, [x]);
        }
      }
    })
  }
  edit(row) {
    this.editpopupServiceService.openDialog(this.tableSetting, row).subscribe(x => {
      // this.onSave.emit(x);
      if (x) {
        let index = this.data.findIndex(x => {
          return x === row;
        });
        this.data[index] = x;
        if (this.updateData) {
          this.updateData.apply(this, [x]);
        }
      }
    })
  }
  delete(row) {
    let index = this.data.findIndex(x => {
      return x === row;
    });
    this.data.splice(index, 1);
    if (this.deleteData) {
      this.deleteData(row)
    }
  }
}
