import { Injectable } from '@angular/core';
import { DataService } from '../../core/data.api/data.service';
import { HttpClient } from '@angular/common/http';
import { Products } from 'src/app/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends DataService {
  public readonly serviceApi: string='api/Product';

  constructor(http: HttpClient) {
    super(http)
  }
  getProducts():Observable<object>{
    return this.http.get('assets/mocks/products.json') ;
  }
}
