import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MedecinComponentComponent} from './medecin-component/medecin-component.component';
import {PatientsComponent} from './patients/patients.component';
// noinspection JSAnnotator
const routes: Routes = [
  { path : 'medecinVue', component :MedecinComponentComponent },
  { path : 'patientVue', component :PatientsComponent },
  {path: '', redirectTo: '/medecinVue', pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
