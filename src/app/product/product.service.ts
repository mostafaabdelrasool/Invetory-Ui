import { Injectable } from '@angular/core';
import { DataService } from '../core/data.api/data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public dataService: DataService) {
    this.dataService.url += 'Product/'
  }

}
