import { Component, OnInit } from '@angular/core';
import {medecinservice} from '../Service/medecin.service';






@Component({
  selector: 'app-medecin-component',
  templateUrl: './medecin-component.component.html',
  styleUrls: ['./medecin-component.component.scss']
})
export class MedecinComponentComponent implements OnInit {

  ngOnInit() {
  }

  info_medecin: any;
  Agenda = [];
  config: any;
  title = 'FIRST3';

  constructor(private Medecinservice: medecinservice) {
    this.info_medecin = this.Medecinservice.getinfo();
    this.Agenda = this.Medecinservice.getallAgenda();

  }
}

