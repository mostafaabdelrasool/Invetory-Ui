import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'st-image',
  templateUrl: './image.uploader.component.html',
  styleUrls: ['./image.uploader.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ImageUploaderComponent implements OnInit {
  @Input() data :string;
  @Output() dataChange =new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onFileChanged(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.data = event.target['result'];
        this.dataChange.emit(this.data);
      }
    }
  }
}
