import { Identidad } from "../comun/Identidad";
import { Direccion } from "../comun/Direccion";
import { Marcada } from "../marcada/Marcada";

export class Institucion extends Identidad {

    nombre: string;

    siglas: string

    cue: string

    geolocalizacion: string

    direccion: Direccion;

    marcadas: Marcada[];

}