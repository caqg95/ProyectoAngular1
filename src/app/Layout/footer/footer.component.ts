import { Component, OnInit,Input } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import InformacionPersonal from '../../InformacionPersonal';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  informacion!: InformacionPersonal;

  constructor(private informacionService:InformacionService) { }

  ngOnInit(): void {
    this.informacion=this.informacionService.get_informacion();
    console.log(this.informacion)
  }

}
