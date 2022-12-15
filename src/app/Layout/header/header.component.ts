import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string="";
  @Input() nombre: string="";
  @Input() profesion: string="";
  constructor() { }

  ngOnInit(): void {
  }

}
