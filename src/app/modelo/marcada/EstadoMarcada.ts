import { Identidad } from "../comun/Identidad";
import { Marcada } from "./Marcada";

export class EstadoMarcada extends Identidad {

    constructor(id: number) {
        super();
        this.id = id;
    }

    estado: string

    marcadas: Marcada[];
}