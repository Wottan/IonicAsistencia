import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/servicios/storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private storageService: StorageService
  ) { }

  ngOnInit() { }

  logout() {
    this.authService.logout();
  }

  mostrar() {
    this.storageService.get('userData').then(user => {
      console.log(user.token);
    });
  }
}
