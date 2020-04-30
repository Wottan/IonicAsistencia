import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router
  ) { }


  login(postData: any): Observable<any> {
    return this.httpService.post('login', postData);
  }

  logout() {
    this.storageService.removeStorageItem('userData').then(res => {
      // console.log('Res ' + res);
      this.router.navigate(['']);
    });
  }
}