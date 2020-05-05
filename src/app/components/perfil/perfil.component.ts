import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { StorageService } from 'src/app/servicios/storage/storage.service';
import { HttpService } from 'src/app/servicios/http/http.service';
import { HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/app/modelo/Usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  usuario: any = {};

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private httpService: HttpService
  ) { }

  async ngOnInit() {
    this.usuario['rol'] = {};
    let user = await this.storageService.get('userData');
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': user.token });
    let options = { headers: headers, withCredintials: false };
    this.httpService.get('usuarios/' + user.idUsuario, options).subscribe(usuario => {
      console.log(usuario);
      this.usuario = usuario;
    });
  }

  logout() {
    this.authService.logout();
  }

  mostrar() {
    this.storageService.get('userData').then(user => {
      console.log(user.token);
    });
  }
}
