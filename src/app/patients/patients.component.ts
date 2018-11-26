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
  constructor(public Userservice :  UserService ) {

  }

  ngOnInit() {
    this.userChangedSubscription= this.Userservice.userChanged
      .subscribe(
        (user: UserAccount) => {
          console.log(user);

        }
      );
    this.Userservice.getOne('1');
  }


}
