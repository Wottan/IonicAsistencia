import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  headers = new HttpHeaders();
  options = { headers: this.headers, withCredintials: false };

  constructor(private http: HttpClient) { }

  post(serviceName: string, data: any) {
    const url = environment.apiURL + serviceName;
    return this.http.post(url, data, this.options);
  }

  get() {

  }
}
