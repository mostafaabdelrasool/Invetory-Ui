import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableSetting, PopupFields } from '../model/popup.fields';
import { EditpopupService } from '../editPopup/edit.Popup.service';
import { DataService } from './../../../core/data.api/data.service';
import { ObjectUtilityService } from '../service/object.utility.service';
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
  @Input() tableSetting: TableSetting;
  @Output() onSave: EventEmitter<any>;
 
  popupFields: Array<PopupFields>=[];
  constructor(private editpopupServiceService: EditpopupService,
    private dataService: DataService,
    private objectUtilityService:ObjectUtilityService) {
    this.onSave = new EventEmitter<any>();
  }
  ngOnInit() {
    this.validateTableSettings();
    // this.data.push(this.item) ;
    this.popupFields = this.tableSetting.popupFields;
      console.log('data =>',  this.data);
  }

  private validateTableSettings() {
    if (this.tableSetting.headerSetting.length === 0) {
      throw 'Popup fileds should not be null';
    }
  }
  addNewLine() {
    this.editpopupServiceService.openDialog(this.tableSetting.popupFields).subscribe(x => {
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
    this.editpopupServiceService.openDialog(this.tableSetting.popupFields, row).subscribe(x => {
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

  applyFilter(filterValue: string) {
   
  }
}
