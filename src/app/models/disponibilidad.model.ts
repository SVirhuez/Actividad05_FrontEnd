
import { Ciclo } from "./ciclo.model";
import { Usuario } from "./usuario.model";

export class Disponibilidad {

	 idDisponibilidad?: number;
	 horaInicio?: String ;
	 horaFin?: String ;
     dia?: String ;
    usuario?: Usuario ;
    ciclo?: Ciclo ;
}
