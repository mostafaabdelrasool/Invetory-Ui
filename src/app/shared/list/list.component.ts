import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CellStatus } from '../editInPlace/editInPlace.component';
import { TableSetting } from '../EditPopup/popup.fields';
import { EditpopupServiceService } from '../EditPopup/editPopup.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() data: Array<any>;
  @Input() saveData: Function;
  @Input() deleteData: Function;
  @Input() updataData: Function;
  @Input() tableSetting: Array<TableSetting>;
  @Output() onSave: EventEmitter<any>;
  private _keys: Array<any>;
  constructor(private editpopupServiceService: EditpopupServiceService) {
    this._keys = [];
    this.onSave = new EventEmitter<any>();
  }
  ngOnInit() {
    this.validateTableSettings();
  }
  private validateTableSettings() {
    if (this.tableSetting.length === 0 ) {
     throw 'Popup fileds should not be null';
    }
  }
  addNewLine() {
    this.editpopupServiceService.openDialog(this.tableSetting).subscribe(x => {
      // this.onSave.emit(x);
      if (x) {
        this.data.push(x);
        this.saveData.apply(this, [x]);
      }
    })
  }
  edit(row) {
    row.status = CellStatus.Edit;
  }
  save(row) {
    if (this.saveData) {
      this.saveData.apply(this, [row])
    }
    row.status = CellStatus.Save;
  }
  delete(row) {
    let index = this.data.findIndex(row);
    this.data.splice(index, 1);
    if (this.deleteData) {
      this.deleteData(row)
    }
  }
  cancel(row) {
    row.status =CellStatus.Cancel;
  }
}
