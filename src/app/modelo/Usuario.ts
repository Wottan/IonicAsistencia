import { Asistencia } from "./asistencia/Asistencia";
import { Persona } from "./Persona";
import { RolUsuario } from "./RolUsuario";

export class Usuario extends Persona {

    constructor(id: number) {
        super();
        this.id = id;
    }

    nombreUsuario: string;

    clave: string;

    rol: RolUsuario;

    asistencias: Asistencia[];

}