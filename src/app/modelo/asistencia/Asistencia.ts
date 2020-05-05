import { Identidad } from '../comun/Identidad';
import { Marcada } from '../marcada/Marcada';
import { Usuario } from '../Usuario';

export class Asistencia extends Identidad {


    constructor(fecha: string, usuario: Usuario/* , marcadas: Marcada[] */) {
        super();
        this.fecha = fecha;
        this.usuario = usuario,
            this.marcadas = []
    }
    fecha: string;

    marcadas: Marcada[];

    usuario: Usuario;
}