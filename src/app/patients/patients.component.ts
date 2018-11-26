import { Component, OnInit } from '@angular/core';
import {UserService} from '../Service/User.service';
import {Subscription} from 'rxjs';
import {UserAccount} from '../models/UserAccount.model';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  userChangedSubscription: Subscription;
  patient: any;
  constructor(public userservice :  UserService ) {

  }

  ngOnInit() {
    // every subscription must be in OnInit!
    this.userChangedSubscription= this.userservice.userChanged
      .subscribe(
        (user: UserAccount) => {
          console.log(user);
          this.patient = user;

        }
      );
  }


  getPatient(id: string){
    this.userservice.getOne(id);
  }
  
  // remove patient from front end only.
  removePatient(){
    this.patient = null;
  }
  


}
