import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { MarcadaComponent } from './marcada/marcada.component';
import { ListaMarcadaComponent } from './lista-marcada/lista-marcada.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonicSelectableModule } from 'ionic-selectable';


@NgModule({
  declarations: [PerfilComponent, MarcadaComponent, ListaMarcadaComponent],
  exports: [PerfilComponent, MarcadaComponent, ListaMarcadaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule
  ]
})
export class ComponentsModule { }
