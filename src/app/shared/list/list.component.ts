import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() data: Array<any>;
  keys: Array<any>;
  constructor() {
    this.keys = [];
  }
  ngOnInit() {
    this.getDataKeys();

  }
  private getDataKeys() {
    if (this.data.length > 0) {
      Object.keys(this.data[0]).forEach(x => {
        this.keys.push(x);
      });
    }
  }
  addNewLine() {
    this.data.push({ isEdit: true });
  }
  changeRowStatus(row) {
    row.isEdit = !row.isEdit;
  }
  getCellType(cell: string): string {
    if (cell.search('img')!==-1 || cell.search('image')!==-1) {
     return 'img'
    }
    return 'txt';
  }
}
