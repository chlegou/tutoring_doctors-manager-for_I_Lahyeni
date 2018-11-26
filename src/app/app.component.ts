import { Component } from '@angular/core';
import {medecinservice} from './Service/medecin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{ info_medecin:any;
Agenda=[];
  title = 'FIRST3';
  constructor (private Medecinservice: medecinservice)
  {
this.info_medecin=this.Medecinservice.getinfo();
  this.Agenda=this.Medecinservice.getallAgenda();}
}
