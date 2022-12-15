import { Injectable } from '@angular/core';
import InformacionPersonal from '../InformacionPersonal';
import { informacion } from '../data';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  informacion: InformacionPersonal=informacion;
  constructor() { }

  get_informacion():InformacionPersonal{
    return this.informacion;
  }
}
