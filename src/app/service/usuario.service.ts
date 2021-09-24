import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8090//rest/disponibilidad';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  
  constructor(private http: HttpClient) { }

  listaUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(baseUrl+"/listaUsuario");
  }
}
