import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}/${this.url}`;
  }
  get() {
    return this.http.get(this.url);
  }
  post() {

  }
}

