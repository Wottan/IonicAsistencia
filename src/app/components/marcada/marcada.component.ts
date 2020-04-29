import { Component, OnInit } from '@angular/core';
// import { IonicSelectableComponent } from 'ionic-selectable';


class Port {
  public id: number;
  public name: string;
}
@Component({
  selector: 'app-marcada',
  templateUrl: './marcada.component.html',
  styleUrls: ['./marcada.component.scss'],
})
export class MarcadaComponent implements OnInit {
  ports: Port[];
  port: Port;
  constructor() {
    this.ports = [
      { id: 1, name: 'Tokai' },
      { id: 2, name: 'Vladivostok' },
      { id: 3, name: 'Navlakhi' }
    ];
  }

  ngOnInit() { }


  marcar() {

  }

  // portChange(event: {
  //   component: IonicSelectableComponent,
  //   value: any
  // }) {
  //   console.log('port:', event.value);
  // }

}
