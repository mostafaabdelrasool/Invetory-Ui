import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/core/data.api/data.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends DataService {

  public readonly serviceApi: string='api/Customer';

  constructor(http: HttpClient) {
    super(http)
  }
}