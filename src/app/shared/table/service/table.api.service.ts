import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableApiService {

  constructor(private http: HttpClient) { }
  fetchData(url) {
    return this.http.get(url);
  }
}
