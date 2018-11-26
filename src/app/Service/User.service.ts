import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from '../app-config';
import {Subject} from 'rxjs';
import {UserAccount} from "../models/UserAccount.model";
import { map, catchError } from 'rxjs/operators';
import {throwError } from 'rxjs';
@Injectable()
export class UserService {
  private path = `${GLOBAL.apiEndpoint}/users`;
  userChanged = new Subject<UserAccount>();

constructor(  public httpClient: HttpClient)
{}

  getOne(idOrUsernameOrEmail:string)
  {

    return this.httpClient.get<UserAccount>(`${this.path}/` + idOrUsernameOrEmail)
      .pipe(map(
        (user) => {
          return user;
        }
        ),catchError (error => {
        return throwError('Something Went Wrong!');})
      )
      .subscribe(
        (user) => {
          this.userChanged.next(user);
        }
      )
      ;
  }

}
