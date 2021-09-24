import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { CicloService } from 'src/app/service/ciclo.service';
import { DisponibilidadService } from 'src/app/service/disponibilidad.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import {Disponibilidad} from 'src/app/models/disponibilidad.model'
import { Ciclo } from 'src/app/models/ciclo.model';

@Component({
  selector: 'app-add-disponibilidad',
  templateUrl: './add-disponibilidad.component.html',
  styleUrls: ['./add-disponibilidad.component.css']
})
export class AddDisponibilidadComponent implements OnInit {

  lstUsuarios: Usuario[] = [];
  lstCiclos: Ciclo[] = [];
  
  disponibilidad: Disponibilidad = {
    usuario:{
      idUsuario: 0
    },
    ciclo:{
      idCiclo:0
    }
  }

  
  constructor(private service: DisponibilidadService,private usuarioService:UsuarioService,private cicloService:CicloService) 
  { 
    this.usuarioService.listaUsuarios().subscribe(
      usuarios => this.lstUsuarios = usuarios
    );
    this.cicloService.listaCiclos().subscribe(
      ciclos => this.lstCiclos = ciclos
    );
  }

  saveDisp(){
    console.log(">>> Save Disp");
    console.log(this.disponibilidad);
    
    this.service.create(this.disponibilidad).subscribe(
      response=>{
        console.log(response.mensaje);
        alert(response.mensaje);
      },
      error=>{
        console.log(error);
      },
    );
  }

  ngOnInit(): void {
  }

}
