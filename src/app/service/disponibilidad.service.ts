import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disponibilidad } from '../models/disponibilidad.model';

const BaseURL = "http://localhost:8090/rest/disponibilidad/RegistrarDisp"

@Injectable({
  providedIn: 'root'
})
export class DisponibilidadService {

  constructor(private http: HttpClient) { }

  create(data:Disponibilidad): Observable<any>{
    return this.http.post(BaseURL,data);
  }
}
