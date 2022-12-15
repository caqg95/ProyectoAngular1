import { Component,OnInit } from '@angular/core';
import { InformacionService } from './services/informacion.service';
import InformacionPersonal from './InformacionPersonal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  informacion!: InformacionPersonal;

  constructor(private informacionService:InformacionService) { }
  title = 'Projecto #1';

  ngOnInit(): void {
    this.informacion=this.informacionService.get_informacion();
    console.log(this.informacion)
  }

}

