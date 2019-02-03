import { Injectable } from '@angular/core';
import { DataService } from 'src/app/core/data.api/data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends DataService{
  serviceApi: string;

constructor(http: HttpClient) {
  super(http)
  this.serviceApi= 'api/Category';
 }

}
