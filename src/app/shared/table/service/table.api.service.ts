import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TableApiService {

  constructor(private http: HttpClient) { }
  fetchData(url) {
    return this.http.get(environment.apiUrl + url);
  }
}
