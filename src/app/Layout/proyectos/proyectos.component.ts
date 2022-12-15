import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import InformacionPersonal from '../../InformacionPersonal';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  informacion!: InformacionPersonal;

  constructor(private informacionService:InformacionService) { }

  ngOnInit(): void {
    this.informacion=this.informacionService.get_informacion();
    console.log(this.informacion)
  }

}
