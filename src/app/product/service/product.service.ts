import { Injectable } from '@angular/core';
import { DataService } from '../../core/data.api/data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends DataService {
  serviceApi: string;

  constructor(http: HttpClient) {
    super(http)
     this.serviceApi= 'api/Product';
  }
 
}
