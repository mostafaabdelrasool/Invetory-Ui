import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
  }
  get() {
    return this.http.get(this.url);
  }
  post(data) {
    return this.http.post(this.url, data);
  }
}

