import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CellStatus } from '../editInPlace/editInPlace.component';
import { PopupFields } from '../EditPopup/popup.fields';
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
  @Input() popupFileds: Array<PopupFields>;
  @Output() onSave: EventEmitter<any>;
  private _keys: Array<any>;
  constructor(private editpopupServiceService: EditpopupServiceService) {
    this._keys = [];
    this.onSave = new EventEmitter<any>();
  }
  ngOnInit() {
    this.getDataKeys();
  }
  private getDataKeys() {
    if (this.popupFileds.length > 0 ) {
      this.popupFileds.forEach(x => {
        this._keys.push(x.model)
      })
    } else {
     throw 'Popup fileds should not be null';
    }
  }
  addNewLine() {
    this.editpopupServiceService.openDialog(this.popupFileds).subscribe(x => {
      // this.onSave.emit(x);
      this.data.push(x);
      this.saveData.apply(this, [x])
    })
  }
  edit(row) {
    row.status = CellStatus.Edit;
  }
  getCellType(cell: string): string {
    if (cell.search('img') !== -1 || cell.search('image') !== -1) {
      return 'img'
    }
    return 'txt';
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
