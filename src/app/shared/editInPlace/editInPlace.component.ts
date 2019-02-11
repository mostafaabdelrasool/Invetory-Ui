import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, SimpleChanges } from '@angular/core';

@Component({
  selector: 'st-editor',
  templateUrl: './editInPlace.component.html',
  styleUrls: ['./editInPlace.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class EditInPlaceComponent implements OnInit {
  private _status: CellStatus;
  @Input() data: any;
  @Output() dataChange = new EventEmitter<any>();
  @Input() type: string;
  private _tempData: any;
  constructor() { }

  ngOnInit() {
  }

  public get status(): CellStatus {
    return this._status
  }
  @Input()
  public set status(v: CellStatus) {
    this._status = v;
    if (v === CellStatus.Save) {
      this.data = this._tempData;

    } else {
      this._tempData = this.data;
    }
  }

}
export enum CellStatus {
  Edit = 1,
  Save = 2,
  Cancel = 3,
  read = 4
}
