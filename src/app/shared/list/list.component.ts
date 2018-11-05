import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CellStatus } from '../editInPlace/editInPlace.component';
import { PopupFields } from '../EditPopup/popup.fields';
import { EditpopupServiceService } from '../EditPopup/EditpopupService.service';

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
  @Input() popupFileds: Array<PopupFields>;
  @Input() headers: Array<string>;
  @Output() onSave: EventEmitter<any>;
  private _keys: Array<any>;
  constructor(private editpopupServiceService: EditpopupServiceService) {
    this.headers = [];
    this._keys = [];
    this.onSave = new EventEmitter<any>();
  }
  ngOnInit() {
    this.getDataKeys();
  }
  private getDataKeys() {
    if (this.data.length > 0 && this.headers.length === 0) {
      this.getObjectStructure(this.data[0])
    } else {
      this._keys = this.headers;
    }
  }
  private getObjectStructure(refObject: any) {
    Object.keys(refObject).forEach(x => {
      this._keys.push(x);
    });
  }
  addNewLine() {
    this.editpopupServiceService.openDialog(this.popupFileds).subscribe(x => {
      this.onSave.emit(x);
    })
  }
  changeRowStatus(row, cellStatus: CellStatus) {
    row.status = cellStatus;
  }
  getCellType(cell: string): string {
    if (cell.search('img') !== -1 || cell.search('image') !== -1) {
      return 'img'
    }
    return 'txt';
  }
  save(row) {
    if (this.saveData) {
      this.saveData(row);
    }
    this.changeRowStatus(row, CellStatus.Save);
  }
  delete(row) {
    let index = this.data.findIndex(row);
    this.data.splice(index, 1);
    if (this.deleteData) {
      this.deleteData(row)
    }
  }
  cancel(row) {
    this.changeRowStatus(row, CellStatus.Cancel);
  }
}
