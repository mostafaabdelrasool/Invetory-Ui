import { Injectable } from '@angular/core';
import { DataService } from '../../core/data.api/data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends DataService{

  constructor(http:HttpClient) 
   {
    super(http)
    this.url += 'api/Product'
  }
}
