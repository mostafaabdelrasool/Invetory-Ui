import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _url: string;
  constructor(public http: HttpClient) {
    this._url = environment.apiUrl;
  }
  get(serviceApi) {
    return this.http.get(this._url + serviceApi);
  }
  post(serviceApi: string, data) {
    return this.http.post(this._url + serviceApi, data);
  }
  put(serviceApi: string, data) {
    return this.http.put(this._url + serviceApi, data);
  }
  delete(serviceApi: string, id) {
    return this.http.delete(this._url + serviceApi, { params: { id: id } });
  }
  getUrl(url) {
    return this.http.get(url);
  }
}

