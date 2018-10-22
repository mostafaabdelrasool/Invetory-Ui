import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'st-editor',
  templateUrl: './editInPlace.component.html',
  styleUrls: ['./editInPlace.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class EditInPlaceComponent implements OnInit {
  @Input() isEdit: boolean;
  @Input() data :any;
  @Output() dataChange =new EventEmitter<any>();
  @Input() type: string;
  constructor() { }

  ngOnInit() {
  }

}
