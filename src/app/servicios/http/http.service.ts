import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // token: any;
  // headers = new HttpHeaders({ 'Content-Type': 'application/json'/* , 'auth': 'asdawww' */ });
  // httpHeader = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };
  // options = { headers: this.headers, withCredintials: false };

  constructor(
    private http: HttpClient
  ) {

  }

  post(serviceName: string, data: any) {
    const url = environment.apiURL + serviceName;
    return this.http.post(url, data/* , this.options */);
  }


  get(tipoABuscar: string, options: Object): Observable<any[]> {
    console.log(options);
    return this.http.get<any[]>(environment.apiURL + tipoABuscar, options)
      .pipe(
        tap(Tipo => console.log(tipoABuscar + ' fetched!'))/* ,
        catchError(this.handleError<any[]>('Get student', [])) */
      );
  }



}
