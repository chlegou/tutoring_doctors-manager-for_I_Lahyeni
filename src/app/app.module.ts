import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {medecinservice} from './Service/medecin.service';
import { MedecinComponentComponent } from './medecin-component/medecin-component.component';
import { PatientsComponent } from './patients/patients.component';
import {HttpClientModule} from '@angular/common/http';
import {fakeBackendProvider} from './Service/fakeBackendInterceptor.interceptor';
import { UserService } from './Service/User.service';
@NgModule({
  declarations: [
    AppComponent,
    MedecinComponentComponent,
    PatientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
  ],
  providers: [
    medecinservice,
    /**BUG_FIX:20181126: this import was missed*/
    UserService,
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
