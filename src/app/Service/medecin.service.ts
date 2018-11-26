import{Injectable} from '@angular/core';

@Injectable()

export class medecinservice {
  Agenda = [
    {date: new Date, message: 'Operation_ Bloc A'},
    {date: new Date, message: 'Operation_Bloc B'},
  ];
  info_medecin = {
    nom: 'Docteur',
    prenom: 'imen',
    telephone: '0124587',
  };

  addCommentaire(c) {
    this.Agenda.push(c);
  }

  getallAgenda() {
    return this.Agenda;
  }

  getinfo() {
    return this.info_medecin;
  }

  getallmessages() {
return this.Agenda;
  }
}
